import {mkdir, readdir, readFile, writeFile} from 'node:fs/promises';
import path from 'node:path';

const docRoots = [
  { dir: path.resolve('docs'), basePath: '/docs' },
  { dir: path.resolve('devdocs'), basePath: '/devdocs' },
];
const outputPath = path.resolve('src/theme/SearchBar/search-index.json');

async function markdownFiles(directory) {
  try {
    const entries = await readdir(directory, {withFileTypes: true});
    const nested = await Promise.all(entries.map((entry) => {
      const fullPath = path.join(directory, entry.name);
      return entry.isDirectory()
        ? markdownFiles(fullPath)
        : entry.isFile() && (entry.name.endsWith('.md') || entry.name.endsWith('.mdx')) ? [fullPath] : [];
    }));
    return nested.flat();
  } catch {
    return [];
  }
}

function plainText(value) {
  return value
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/!?(?:\[[^\]]*\])\([^)]*\)/g, '$1')
    .replace(/[`*_>#|]/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function routeFor(basePath, rootDir, filePath) {
  const relative = path.relative(rootDir, filePath).replace(/\.mdx?$/, '');
  if (relative === 'index') {
    return `${basePath}/`;
  }
  const clean = relative.replace(/\/index$/, '').replace(/\\/g, '/');
  return `${basePath}/${clean}/`;
}

function recordsFor(basePath, rootDir, filePath, markdown) {
  const frontmatter = markdown.match(/^---\n([\s\S]*?)\n---\n?/);
  const source = markdown.slice(frontmatter?.[0].length ?? 0);
  const title = frontmatter?.[1].match(/^title:\s*(.+)$/m)?.[1].replace(/["']/g, '')
    ?? source.match(/^#\s+(.+)$/m)?.[1]
    ?? path.basename(filePath, path.extname(filePath));
  const sections = source.split(/^(?=##\s+)/m);

  return sections.map((section, index) => {
    const heading = section.match(/^##\s+(.+)$/m)?.[1] ?? (index === 0 ? '' : 'Overview');
    return {
      title: plainText(title),
      heading: plainText(heading),
      content: plainText(section).slice(0, 1000),
      path: routeFor(basePath, rootDir, filePath),
    };
  }).filter((record) => record.content);
}

try {
  let allRecords = [];
  for (const { dir, basePath } of docRoots) {
    const files = await markdownFiles(dir);
    const records = (await Promise.all(files.map(async (filePath) =>
      recordsFor(basePath, dir, filePath, await readFile(filePath, 'utf8')),
    ))).flat();
    allRecords = allRecords.concat(records);
  }

  await mkdir(path.dirname(outputPath), {recursive: true});
  await writeFile(outputPath, `${JSON.stringify(allRecords, null, 2)}\n`);
  console.log(`Generated ${allRecords.length} search records across docs and devdocs.`);
} catch (err) {
  console.error('Failed to generate search index:', err);
}

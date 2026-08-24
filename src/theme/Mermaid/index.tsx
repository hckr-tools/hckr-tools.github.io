import React, {useEffect, useRef, useState, type ReactNode} from "react";
import ErrorBoundary from "@docusaurus/ErrorBoundary";
import {ErrorBoundaryErrorMessageFallback} from "@docusaurus/theme-common";
import {MermaidContainerClassName, useMermaidRenderResult} from "@docusaurus/theme-mermaid/client";
import type {Props} from "@theme/Mermaid";
import type {RenderResult} from "mermaid";

function DiagramSvg({renderResult, className}: {renderResult: RenderResult; className: string}): ReactNode {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => { renderResult.bindFunctions?.(ref.current!); }, [renderResult]);
  return <div ref={ref} className={`${MermaidContainerClassName} ${className}`} dangerouslySetInnerHTML={{__html: renderResult.svg}} />;
}

function MermaidRenderer({value}: Props): ReactNode {
  const renderResult = useMermaidRenderResult({text: value});
  const [open, setOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({x: 0, y: 0});
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef({x: 0, y: 0});
  const reset = () => { setZoom(1); setPosition({x: 0, y: 0}); };
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "+" || event.key === "=") setZoom((current) => Math.min(8, current + 0.25));
      if (event.key === "-") setZoom((current) => Math.max(0.1, current - 0.25));
      if (event.key === "0") reset();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  if (!renderResult) return null;
  return (
    <>
      <button className="developer-mermaid-trigger" type="button" onClick={() => { reset(); setOpen(true); }} aria-label="Open interactive diagram viewer">
        <DiagramSvg renderResult={renderResult} className="developer-mermaid-diagram" />
        <span className="developer-mermaid-hint" aria-hidden="true">⤢</span>
      </button>
      {open && (
        <div className="developer-mermaid-modal" role="dialog" aria-modal="true" aria-label="Interactive Diagram Viewer" onClick={close}>
          <div className="developer-mermaid-modal__panel" onClick={(event) => event.stopPropagation()}>
            <div className="developer-mermaid-modal__toolbar">
              <strong>Interactive Diagram Viewer</strong>
              <div>
                <button type="button" onClick={() => setZoom((current) => Math.max(0.1, current - 0.25))} aria-label="Zoom out">−</button>
                <button type="button" onClick={reset}>Reset</button>
                <button type="button" onClick={() => setZoom((current) => Math.min(8, current + 0.25))} aria-label="Zoom in">+</button>
                <button type="button" onClick={close}>Close</button>
              </div>
            </div>
            <div
              className="developer-mermaid-modal__canvas"
              onWheel={(event) => {
                event.preventDefault();
                setZoom((current) => Math.min(8, Math.max(0.1, event.deltaY < 0 ? current * 1.05 : current / 1.05)));
              }}
              onMouseDown={(event) => {
                setDragging(true);
                dragStart.current = {x: event.clientX - position.x, y: event.clientY - position.y};
              }}
              onMouseMove={(event) => {
                if (dragging) setPosition({x: event.clientX - dragStart.current.x, y: event.clientY - dragStart.current.y});
              }}
              onMouseUp={() => setDragging(false)}
              onMouseLeave={() => setDragging(false)}
              style={{cursor: dragging ? "grabbing" : "grab"}}
            >
              <div className="developer-mermaid-modal__transform" style={{transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`}}>
                <DiagramSvg renderResult={renderResult} className="developer-mermaid-diagram" />
              </div>
            </div>
            <p>Drag to pan. Scroll or use controls to zoom (up to 8×). Press <kbd>+</kbd>, <kbd>−</kbd>, <kbd>0</kbd>, or <kbd>Esc</kbd>.</p>
          </div>
        </div>
      )}
    </>
  );
}

export default function Mermaid(props: Props): ReactNode {
  return (
    <ErrorBoundary fallback={(params) => <ErrorBoundaryErrorMessageFallback {...params} />}>
      <MermaidRenderer {...props} />
    </ErrorBoundary>
  );
}

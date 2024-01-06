import React, { useState, PointerEvent, CSSProperties, ReactNode } from "react";

export default function DragMove(props: {
  onPointerDown?: (() => void) | undefined;
  onPointerUp?: (() => void) | undefined;
  onPointerMove?: (() => void) | undefined;
  onDragMove: (e: PointerEvent) => void;
  children?: ReactNode;
  style?: CSSProperties | undefined;
  className?: string;
}) {
  const {
    onPointerDown = (_event: PointerEvent<HTMLDivElement>) => {},
    onPointerUp = (_event: PointerEvent<HTMLDivElement>) => {},
    onPointerMove = (_event: PointerEvent<HTMLDivElement>) => {},
    onDragMove,
    children,
    style,
    className,
  } = props;

  const [isDragging, setIsDragging] = useState(false);

  const handlePointerDown = (e: PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);

    onPointerDown(e);
  };

  const handlePointerUp = (e: PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);

    onPointerUp(e);
  };

  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (isDragging) onDragMove(e);

    onPointerMove(e);
  };

  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerMove={handlePointerMove}
      style={style}
      className={className}
    >
      {children}
    </div>
  );
}

import React, { useState } from "react";

export default function DragMove(props: {
  onPointerDown?: (() => void) | undefined;
  onPointerUp?: (() => void) | undefined;
  onPointerMove?: (() => void) | undefined;
  onDragMove: any;
  children?: any;
  style?: any;
  className?: any;
}) {
  const {
    onPointerDown = (_event: any) => {},
    onPointerUp = (_event: any) => {},
    onPointerMove = (_event: any) => {},
    onDragMove,
    children,
    style,
    className,
  } = props;

  const [isDragging, setIsDragging] = useState(false);

  const handlePointerDown = (e: any) => {
    setIsDragging(true);

    onPointerDown(e);
  };

  const handlePointerUp = (e: any) => {
    setIsDragging(false);

    onPointerUp(e);
  };

  const handlePointerMove = (e: any) => {
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

import { useState } from "react";
import DragMove from "./DragMove";
import React from "react";

export function Swiper(props: {
  onSwipedLeft: () => void;
  onSwipedRight: () => void;
  children: any;
}) {
  const { onSwipedLeft, onSwipedRight, children } = props;
  const [translate, setTranslate] = useState({
    x: 0,
    y: 0,
  });
  const [rotation, setRotation] = useState(0);
  const [active, setActive] = useState(false);

  const handleDragMove = (e: any) => {
    if (active) {
      setTranslate({
        x: window.innerWidth / 2 - e.pageX,
        y: window.innerWidth / 2 - e.pageY,
      });

      translate.x < 0
        ? setRotation(Math.min(60, -translate.x * 0.5))
        : setRotation(Math.max(-60, -translate.x * 0.5));
    }
    if (e.pageX > window.innerWidth * 0.75 && active) {
      setActive(false);
      onSwipedRight();
      setRotation(0);
      setTranslate({
        x: 0,
        y: 0,
      });
    }
    if (e.pageX < window.innerWidth * 0.25 && active) {
      setActive(false);
      onSwipedLeft();
      setRotation(0);
      setTranslate({
        x: 0,
        y: 0,
      });
    }
  };
  const handlePointerUp = () => {
    setActive(false);
    setTranslate({
      x: 0,
      y: 0,
    });
    setRotation(0);
  };

  const handlePointerDown = () => {
    setActive(true);
  };
  return (
    <>
      <>
        <DragMove
          onDragMove={handleDragMove}
          onPointerUp={handlePointerUp}
          onPointerDown={handlePointerDown}
        >
          <div
            style={{
              transform: `translateX(${
                -translate.x * 2
              }px)
              translateY(0px)
              rotate(${rotation}deg)`,
              transition: "ease-in-out"
            }}
          >
            {children}
          </div>
        </DragMove>
      </>
    </>
  );
}

import { useState } from "react";
import DragMove from "./DragMove";
export default function Swiper({ onSwipedLeft, onSwipedRight, children }) {
  const [translate, setTranslate] = useState({
    x: 0,
    y: 0,
  });
  const [rotation, setRotation] = useState(0);

  const handleDragMove = (e: any) => {
    setTranslate({
      x: window.innerWidth / 2 - e.pageX,
      y: 0,
    });

    translate.x < 0
      ? setRotation(Math.min(60, -translate.x * 0.5))
      : setRotation(Math.max(-60, -translate.x * 0.5));

    if (e.pageX > window.innerWidth * 0.75) {
      onSwipedRight();
      setRotation(0);
      setTranslate({
        x: 0,
        y: 0,
      });
    }
    if (e.pageX < window.innerWidth * 0.25) {
      onSwipedLeft();
      setRotation(0);
      setTranslate({
        x: 0,
        y: 0,
      });
    }
  };
  const handlePointerUp = (e: any) => {
    setTranslate({
      x: 0,
      y: 0,
    });
    setRotation(0);
  };
  return (
    <>
      <>
        <DragMove onDragMove={handleDragMove} onPointerUp={handlePointerUp}>
          <div
            style={{
              transform: `translateX(${
                -translate.x * 2
              }px) rotate(${rotation}deg)`,
            }}
          >
            {children}
          </div>
        </DragMove>
        <div className="flex flex-row justify-between items-center content-between pt-8">
          <svg
            height="100px"
            width="100px"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 462.539 462.539"
            fill="#000000"
            className="transform -scale-y-100 rotate-180"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <path
                  style={{ fill: "#FF9F9F" }}
                  d="M275.086,270.955c-19.705,30.711-47.409,71.378-68.286,92.057c1.956,0.066,3.915,0.099,5.848,0.099 c94.095,0,161.003-76.664,217.257-122.081c-55.223-42.845-105.15-109.051-202.966-126.548c-1.702-0.305-3.316,0.947-4.039,2.518 c-0.06,0.13-0.102,0.264-0.148,0.397c14.76,18.076,30.833,41.291,44.455,62.047c6.362,9.386,12.426,18.645,17.877,27.14 c-79.07,3.854-158.14,2.85-237.209-3.04c-16.674,19.873-21.715,39.745-15.123,59.618c1.325,3.994,3.306,7.619,5.791,10.786 c47.517-3.523,95.043-5.285,142.559-5.285C212.434,268.664,243.755,269.428,275.086,270.955z"
                ></path>{" "}
                <path
                  style={{ fill: "#B80000" }}
                  d="M212.648,99.428c101.226,0,171.009,88.753,229.892,131.842 c-58.886,43.091-128.654,131.841-229.891,131.841c-1.933,0-3.892-0.033-5.848-0.099c20.877-20.679,48.581-61.346,68.286-92.057 c-31.331-1.527-62.652-2.291-93.982-2.291c-47.739,0-95.488,1.775-143.227,5.332c-23.899-28.483-23.899-56.968,0-85.451 c47.744,3.557,95.478,5.331,143.222,5.331c31.326,0,62.661-0.764,93.987-2.291c-19.705-30.71-47.408-71.378-68.285-92.058 C208.763,99.461,210.708,99.428,212.648,99.428 M212.648,79.428c-2.16,0-4.353,0.037-6.52,0.11 c-7.98,0.269-15.036,5.257-17.949,12.691c-2.913,7.434-1.126,15.888,4.546,21.507c11.483,11.374,27.456,31.945,46.108,59.263 c-19.279,0.583-38.593,0.876-57.735,0.876c-47.053,0-94.74-1.775-141.737-5.276c-0.497-0.037-0.994-0.055-1.488-0.055 c-5.886,0-11.504,2.597-15.319,7.145c-30.074,35.842-30.074,75.32,0,111.162c3.815,4.547,9.434,7.145,15.319,7.145 c0.495,0,0.99-0.018,1.488-0.055c46.998-3.501,94.687-5.276,141.741-5.276c19.142,0,38.452,0.293,57.73,0.876 c-18.652,27.318-34.624,47.888-46.108,59.263c-5.673,5.619-7.46,14.073-4.547,21.507c2.913,7.434,9.969,12.423,17.949,12.691 c2.166,0.073,4.36,0.11,6.521,0.11c84.784,0,148.184-55.605,199.127-100.284c15.088-13.232,29.339-25.731,42.574-35.417 c5.147-3.767,8.189-9.762,8.189-16.14s-3.042-12.374-8.189-16.14c-13.234-9.684-27.484-22.181-42.57-35.412 C360.832,135.036,297.426,79.428,212.648,79.428L212.648,79.428z"
                ></path>{" "}
              </g>{" "}
            </g>
          </svg>
          <p>Swipe left or right</p>
          <svg
            height="100px"
            width="100px"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 462.539 462.539"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <path
                  style={{ fill: "#8ADAB2" }}
                  d="M275.086,270.955c-19.705,30.711-47.409,71.378-68.286,92.057c1.956,0.066,3.915,0.099,5.848,0.099 c94.095,0,161.003-76.664,217.257-122.081c-55.223-42.845-105.15-109.051-202.966-126.548c-1.702-0.305-3.316,0.947-4.039,2.518 c-0.06,0.13-0.102,0.264-0.148,0.397c14.76,18.076,30.833,41.291,44.455,62.047c6.362,9.386,12.426,18.645,17.877,27.14 c-79.07,3.854-158.14,2.85-237.209-3.04c-16.674,19.873-21.715,39.745-15.123,59.618c1.325,3.994,3.306,7.619,5.791,10.786 c47.517-3.523,95.043-5.285,142.559-5.285C212.434,268.664,243.755,269.428,275.086,270.955z"
                ></path>{" "}
                <path
                  style={{ fill: "#1B4242" }}
                  d="M212.648,99.428c101.226,0,171.009,88.753,229.892,131.842 c-58.886,43.091-128.654,131.841-229.891,131.841c-1.933,0-3.892-0.033-5.848-0.099c20.877-20.679,48.581-61.346,68.286-92.057 c-31.331-1.527-62.652-2.291-93.982-2.291c-47.739,0-95.488,1.775-143.227,5.332c-23.899-28.483-23.899-56.968,0-85.451 c47.744,3.557,95.478,5.331,143.222,5.331c31.326,0,62.661-0.764,93.987-2.291c-19.705-30.71-47.408-71.378-68.285-92.058 C208.763,99.461,210.708,99.428,212.648,99.428 M212.648,79.428c-2.16,0-4.353,0.037-6.52,0.11 c-7.98,0.269-15.036,5.257-17.949,12.691c-2.913,7.434-1.126,15.888,4.546,21.507c11.483,11.374,27.456,31.945,46.108,59.263 c-19.279,0.583-38.593,0.876-57.735,0.876c-47.053,0-94.74-1.775-141.737-5.276c-0.497-0.037-0.994-0.055-1.488-0.055 c-5.886,0-11.504,2.597-15.319,7.145c-30.074,35.842-30.074,75.32,0,111.162c3.815,4.547,9.434,7.145,15.319,7.145 c0.495,0,0.99-0.018,1.488-0.055c46.998-3.501,94.687-5.276,141.741-5.276c19.142,0,38.452,0.293,57.73,0.876 c-18.652,27.318-34.624,47.888-46.108,59.263c-5.673,5.619-7.46,14.073-4.547,21.507c2.913,7.434,9.969,12.423,17.949,12.691 c2.166,0.073,4.36,0.11,6.521,0.11c84.784,0,148.184-55.605,199.127-100.284c15.088-13.232,29.339-25.731,42.574-35.417 c5.147-3.767,8.189-9.762,8.189-16.14s-3.042-12.374-8.189-16.14c-13.234-9.684-27.484-22.181-42.57-35.412 C360.832,135.036,297.426,79.428,212.648,79.428L212.648,79.428z"
                ></path>{" "}
              </g>{" "}
            </g>
          </svg>
        </div>
      </>
    </>
  );
}

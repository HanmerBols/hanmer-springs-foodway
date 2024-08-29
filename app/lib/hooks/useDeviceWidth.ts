import { useEffect, useState } from "react";

export const MOBILE_MAX_WIDTH = 768;

// reference: https://stackoverflow.com/a/64218472
export const useDeviceWidth = () => {
  const [width, setWidth] = useState(getWidth());
  const updateWidth = () => setWidth(getWidth());

  useEffect(() => {
    window.onresize = updateWidth;

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  return width;
};

const getWidth = () => {
  return typeof document === "undefined"
    ? MOBILE_MAX_WIDTH
    : document.documentElement.clientWidth;
};

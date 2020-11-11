// Hook
import {useEffect, useState} from "react";

export function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}

export function useScroll(ref) {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [elemOffset, setElemOffset] = useState(
      document.getElementById('page-wrap').getBoundingClientRect()
  );
  const [scrollY, setScrollY] = useState(elemOffset.top);
  const [scrollX, setScrollX] = useState(elemOffset.left);
  const [scrollDirection, setScrollDirection] = useState();

  const listener = e => {
    setElemOffset(document.getElementById('page-wrap').getBoundingClientRect());
    setScrollY(-elemOffset.top);
    setScrollX(elemOffset.left);
    setScrollDirection(lastScrollTop > -elemOffset.top ? "down" : "up");
    setLastScrollTop(-elemOffset.top);
  };

  useEffect(() => {
    document.getElementById('page-wrap').addEventListener("scroll", listener);
    return () => {
      document.getElementById('page-wrap').removeEventListener("scroll", listener);
    };
  });

  return {
    scrollY,
    scrollX,
    scrollDirection
  };
}
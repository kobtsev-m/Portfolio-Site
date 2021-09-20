import { useState, useLayoutEffect } from 'react';

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    windowWidth: null as number | null,
    windowHeight: null as number | null
  });
  const handleResize = () => {
    setWindowSize({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    });
  };
  useLayoutEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowSize;
};

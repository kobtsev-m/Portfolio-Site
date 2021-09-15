import { useEffect, useState } from 'react';
import { useWindowSize } from 'hooks/useWindowSize';
import useMeasure from 'react-use-measure';

export const useContainerOffset = () => {
  const [containerOffset, setContainerOffset] = useState<number>(0);
  const { width: windowWidth } = useWindowSize();
  const [containerRef, { width: containerWidth }] = useMeasure();

  useEffect(() => {
    if (windowWidth && containerWidth) {
      setContainerOffset((windowWidth - containerWidth) / 2);
    }
  }, [windowWidth, containerWidth]);

  return { containerOffset, containerRef };
};

import { useLayoutEffect, useRef, useState } from 'react';
import { useWindowSize } from 'hooks';

export const useScrollTrigger = () => {
  const [isUnder, setIsUnder] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { windowHeight } = useWindowSize();

  const handleScroll = () => {
    if (!ref.current || !windowHeight) {
      return;
    }
    const { top, bottom } = ref.current.getBoundingClientRect();
    const isUnderNew = top < windowHeight / 2 && bottom > windowHeight / 2;
    if (isUnder !== isUnderNew) {
      setIsUnder(isUnderNew);
    }
  };

  useLayoutEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return { ref, isUnder };
};

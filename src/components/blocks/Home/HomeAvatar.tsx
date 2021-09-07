import { useState, useEffect } from 'react';
import { useSprings, animated, config } from 'react-spring';
import avatar1 from 'assets/home/avatar1.min.json';
import { ClearButton } from 'styles/common/buttons';

export default function HomeAvatar() {
  const [animate, setAnimate] = useState(false);

  const effects = useSprings(
    avatar1.length,
    avatar1.map((_, i) => ({
      transform: `translateX(${animate ? '0' : '-800px'}) rotate(${
        animate ? '0' : '720deg'
      })`,
      delay: 600 + i * 4,
      config: config.gentle
    }))
  );

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 718 960'
        width='100%'
        height='600px'
      >
        {effects.map((effect, i) => (
          <animated.path key={i} style={effect} {...avatar1[i]} />
        ))}
      </svg>
      <ClearButton onClick={() => setAnimate(!animate)}>Animate</ClearButton>
    </div>
  );
}

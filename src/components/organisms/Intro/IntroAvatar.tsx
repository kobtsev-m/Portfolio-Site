import { memo, useState } from 'react';
import { animated, config, useSprings } from 'react-spring';
import { darkTheme } from 'styles/theme';
import { hexToRgb } from 'utils/converters';
import { AvatarJson as avatar } from 'assets';
import { Box, BorderButton } from 'components/atoms';
import { AvatarSvg } from './Intro.styles';

enum AnimationStatus {
  Animation1,
  Animation2,
  Stopped
}

export const IntroAvatar = memo(() => {
  const [status, setStatus] = useState<AnimationStatus>(
    AnimationStatus.Animation1
  );

  const effects1 = useSprings(
    avatar.length,
    avatar.map((_, i) => ({
      from: { transform: 'translateX(-800px)' },
      to: { transform: 'translateX(0)' },
      delay: 600 + i * 4,
      config: config.gentle,
      onRest: () => {
        if (i === avatar.length - 1) {
          setStatus(AnimationStatus.Stopped);
        }
      }
    }))
  );

  const effects2 = useSprings(
    avatar.length,
    avatar.map((_, i) => ({
      to:
        status === AnimationStatus.Animation2
          ? async (next: any) => {
              await next({ fill: hexToRgb(darkTheme.fontColor) });
              await next({ fill: avatar[i].fill });
            }
          : { fill: avatar[i].fill },
      delay: 300 + i * 2,
      config: { ...config.gentle, duration: 1500 },
      onRest: () => {
        if (i === avatar.length - 1) {
          setTimeout(() => setStatus(AnimationStatus.Stopped), 1500);
        }
      }
    }))
  );

  const handleAnimateClick = () => {
    setStatus(AnimationStatus.Animation2);
  };

  return (
    <div>
      <AvatarSvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 718 960'>
        <rect
          x='0'
          y='0'
          width='718'
          height='960'
          fill={darkTheme.background}
        />
        {(status === AnimationStatus.Animation1 ? effects1 : effects2).map(
          (effect, i) => (
            <animated.path key={i} style={effect} {...avatar[i]} />
          )
        )}
      </AvatarSvg>
      <Box mt='0.5em'>
        <BorderButton
          onClick={handleAnimateClick}
          isLoading={status !== AnimationStatus.Stopped}
        >
          ANIMATE
        </BorderButton>
      </Box>
    </div>
  );
});

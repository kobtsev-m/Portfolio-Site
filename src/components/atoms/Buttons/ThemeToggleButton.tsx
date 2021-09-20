import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Theme } from '~/types';
import { ClearButton } from './Buttons.styles';
import { Box } from '~/components/atoms';
import { MoonJson as moon, SunJson as sun } from '~/assets';
import { animated, config, useSpring } from 'react-spring';

interface ThemeToggleButtonProps {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeToggleButton: FC<ThemeToggleButtonProps> = (props) => {
  const { theme, toggleTheme } = props;
  const { t } = useTranslation();

  const { x, ...effect } = useSpring({
    from: {
      x: 0,
      transform: 'rotate(320deg)'
    },
    to: {
      x: 1,
      transform: 'rotate(0deg)'
    },
    reverse: theme === Theme.Dark,
    config: config.slow
  });

  return (
    <ClearButton onClick={toggleTheme}>
      <Box flex align='center' mr={{ xs: '0', lg: '0.2rem' }}>
        <svg
          width='45px'
          height='45px'
          viewBox='0 0 55 55'
          xmlns='http://www.w3.org/2000/svg'
        >
          <animated.path
            style={{ fill: '#FEE140', transformOrigin: 'center', ...effect }}
            d={x.to({ range: [0.0, 1.0], output: [sun.d, moon.d] })}
          />
        </svg>
      </Box>
      <Box hideAt='lg'>{t(`nav.${Theme[theme].toLowerCase()}Mode`)}</Box>
    </ClearButton>
  );
};

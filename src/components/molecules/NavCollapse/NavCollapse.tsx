import { Dispatch, FC, SetStateAction } from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import { animated, useSpring } from 'react-spring';
import { Box, CustomButton } from '~/components/atoms';
import { Wrapper, NavItem } from './NavCollapse.styles';

interface NavCollapseProps {
  navCollapse: boolean;
  setNavCollapse: Dispatch<SetStateAction<boolean>>;
}

const AnimatedWrapper = animated(Wrapper);

export const NavCollapse: FC<NavCollapseProps> = (props) => {
  const { navCollapse, setNavCollapse } = props;
  const { t } = useTranslation();

  const effect = useSpring({
    transform: navCollapse ? 'translateY(0vh)' : 'translateY(100vh)',
    config: { mass: 1, tension: 280, friction: 60, duration: 500 }
  });

  return (
    <Box showAt='xl'>
      <AnimatedWrapper style={effect}>
        <NavItem>
          <Link
            to='about'
            offset={-100}
            smooth={true}
            onClick={() => setNavCollapse(false)}
          >
            {t('nav.about')}
          </Link>
        </NavItem>
        <NavItem>
          <Link
            to='projects'
            offset={-100}
            smooth={true}
            onClick={() => setNavCollapse(false)}
          >
            {t('nav.projects')}
          </Link>
        </NavItem>
        <NavItem>
          <Link
            to='contact'
            offset={-100}
            smooth={true}
            onClick={() => setNavCollapse(false)}
          >
            {t('nav.contact')}
          </Link>
        </NavItem>
        <NavItem>
          <CustomButton>{t('nav.resume')}</CustomButton>
        </NavItem>
      </AnimatedWrapper>
    </Box>
  );
};

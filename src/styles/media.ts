import { BreakpointType, RulesType } from 'types/flex';

export const breakpoints = {
  xs: '@media (max-width: 575px)',
  sm: '@media (min-width: 576px)',
  md: '@media (min-width: 768px)',
  lg: '@media (min-width: 992px)',
  xl: '@media (min-width: 1200px)',
  xxl: '@media (min-width: 1400px)'
};

export const media = (key: BreakpointType, value: string) => {
  return `${breakpoints[key]} { ${value}; }`;
};

export const mediaList = (ruleset: RulesType) => {
  return (Object.keys(ruleset) as BreakpointType[]).reduce((css, key) => {
    if (key === 'xs') {
      return `${css} ${ruleset[key]};`;
    }
    return `${css} ${breakpoints[key]} { ${ruleset[key]}; }`;
  }, '');
};

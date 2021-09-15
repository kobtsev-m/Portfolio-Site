import { BreakpointType, RulesType } from 'types/flex';

export const breakpointsSizes = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400
};

export const breakpoints = Object.entries(breakpointsSizes).reduce(
  (acc, [key, value]) => {
    return { ...acc, [key]: `@media (min-width: ${value}px)` };
  },
  {} as { [k in keyof typeof breakpointsSizes]: string }
);

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

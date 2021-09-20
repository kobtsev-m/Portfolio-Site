import { Breakpoint, StyleRules } from '~/types';

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

export const media = (key: Breakpoint, value: string) => {
  return `${breakpoints[key]} { ${value}; }`;
};

export const mediaList = (ruleset: StyleRules) => {
  return (Object.keys(ruleset) as Breakpoint[]).reduce((css, key) => {
    if (key === 'xs') {
      return `${css} ${ruleset[key]};`;
    }
    return `${css} ${breakpoints[key]} { ${ruleset[key]}; }`;
  }, '');
};

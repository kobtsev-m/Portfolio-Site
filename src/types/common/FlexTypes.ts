import { breakpoints } from 'styles';

export type Breakpoint = keyof typeof breakpoints;

export type StyleRules<T extends string = string> = {
  [k in Breakpoint]?: T;
};

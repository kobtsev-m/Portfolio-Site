import { breakpoints } from 'styles/media';

export type BreakpointType = keyof typeof breakpoints;

export type RulesType<T extends string = string> = {
  [key in BreakpointType]?: T;
};

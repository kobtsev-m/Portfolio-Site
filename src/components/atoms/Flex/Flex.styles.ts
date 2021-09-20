import styled from 'styled-components';
import { media } from '~/styles';
import { Breakpoint } from '~/types';
import { Box } from './Box.styles';

export const Container = styled(Box)`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  ${media('sm', 'max-width: 540px')};
  ${media('md', 'max-width: 720px')};
  ${media('lg', 'max-width: 960px')};
  ${media('xl', 'max-width: 1140px')};
  ${media('xxl', 'max-width: 1320px')}
`;

interface RowProps {
  reverse?: boolean;
}

export const Row = styled(Box)<RowProps>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ reverse }) => reverse && 'row-reverse'};
`;

const getColStyle = (span: number, gutter: string | undefined) => {
  let width = (span / 24) * 100;
  if (!gutter) {
    return `width: ${width}%`;
  }
  let css = '';
  for (let i = 1; i < Math.floor(24 / span) + 1; ++i) {
    let ml0 = `calc(${gutter} / 2)`;
    let mr0 = `calc(${gutter} / 2)`;
    let ml1 = `calc(${gutter} / 2)`;
    let mr1 = `calc(${gutter} / 2)`;
    if (i === Math.floor(24 / span)) {
      mr0 = '0';
      ml1 = '0';
    }
    css += `
    &:nth-of-type(${i}n) {
      margin-left: ${ml0};
      margin-right: ${mr0};
    }
    &:nth-of-type(${i}n + 1) {
      margin-left: ${ml1};
      margin-right: ${mr1};
    }`;
  }
  let indents = Math.ceil(24 / span);
  css += `width: calc(${width}% - ${gutter} * ${indents - 1} / ${indents})`;
  return css;
};

type ColumnLayoutProps = {
  [k in Breakpoint]?: number;
};

interface ColumnProps extends ColumnLayoutProps {
  gutter?: string;
}

export const Column = styled(Box)<ColumnProps>`
  flex: 0 0 auto;
  width: 100%;

  ${({ xs, gutter }) => xs && media('xs', `${getColStyle(xs, gutter)}`)}
  ${({ sm, gutter }) => sm && media('sm', `${getColStyle(sm, gutter)}`)}
  ${({ md, gutter }) => md && media('md', `${getColStyle(md, gutter)}`)}
  ${({ lg, gutter }) => lg && media('lg', `${getColStyle(lg, gutter)}`)}
  ${({ xl, gutter }) => xl && media('xl', `${getColStyle(xl, gutter)}`)}
  
  &:first-of-type {
    margin-left: 0;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;

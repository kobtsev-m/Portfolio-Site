import styled from 'styled-components';
import { media } from 'styles/media';
import { BreakpointType } from 'types/flex';
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

interface RowPropsType {
  reverse?: boolean;
}

export const Row = styled(Box)<RowPropsType>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ reverse }) => reverse && 'row-reverse'};
`;

const getColWidth = (span: number) => {
  let width = (span / 12) * 100;
  return `width ${width}%`;
};

type ColumnPropsType = {
  [key in BreakpointType]?: number;
};

export const Column = styled(Box)<ColumnPropsType>`
  flex: 0 0 auto;
  width: 100%;
  ${({ xs }) => xs && media('xs', getColWidth(xs))}
  ${({ sm }) => sm && media('sm', getColWidth(sm))}
  ${({ md }) => md && media('md', getColWidth(md))}
  ${({ lg }) => lg && media('lg', getColWidth(lg))}
  ${({ xl }) => xl && media('xl', getColWidth(xl))}
`;

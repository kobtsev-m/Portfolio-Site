import styled from 'styled-components';
import { Breakpoint, StyleRules } from '~/types';
import { media, mediaList } from '~/styles';

type AlignType = 'center' | 'start' | 'end' | 'between' | 'around';

interface BoxProps {
  position?: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  width?: number;
  height?: number;
  flex?: boolean;
  flexWrap?: boolean;
  flexDirection?: 'column' | 'row';
  align?: AlignType | StyleRules<AlignType>;
  justify?: AlignType | StyleRules<AlignType>;
  hideAt?: Breakpoint;
  showAt?: Breakpoint;
  p?: string | StyleRules;
  pt?: string | StyleRules;
  pb?: string | StyleRules;
  pr?: string | StyleRules;
  pl?: string | StyleRules;
  m?: string | StyleRules;
  mt?: string | StyleRules;
  mb?: string | StyleRules;
  mr?: string | StyleRules;
  ml?: string | StyleRules;
}

const formatAlignValue = (
  prop: 'align-items' | 'justify-content',
  value: string | StyleRules | undefined
) => {
  if (value === 'start' || value === 'end') {
    return `${prop}: flex-${value}`;
  }
  if (value === 'between' || value === 'around') {
    return `${prop}: space-${value}`;
  }
  if (value === 'center') {
    return `${prop}: ${value}`;
  }
  return;
};

const mediaProp = (prop: string, rule: string | StyleRules | undefined) => {
  if (typeof rule === 'object') {
    return mediaList(
      (Object.keys(rule) as Breakpoint[]).reduce((acc, key) => {
        acc[key] = mediaProp(prop, rule[key]) as string;
        return acc;
      }, {} as Record<Breakpoint, string>)
    );
  }
  if (prop === 'align-items' || prop === 'justify-content') {
    return formatAlignValue(prop, rule);
  }
  if (typeof rule === 'string') {
    return `${prop}: ${rule}`;
  }
};

export const Box = styled.div<BoxProps>`
  position: ${({ position }) => position && position};
  top: ${({ top }) => top && top};
  right: ${({ right }) => right && right};
  bottom: ${({ bottom }) => bottom && bottom};
  left: ${({ left }) => left && left};
  transform: ${({ right }) => right === '50%' && 'translateX(-50%)'};
  width: ${({ width }) => width && `${width}%`};
  height: ${({ height }) => height && `${height}%`};
  display: ${({ flex, hideAt }) =>
    hideAt ? 'none' : flex ? 'flex' : 'block'};
  ${({ flex, hideAt }) =>
    hideAt && media(hideAt, `display: ${flex ? 'flex' : 'block'}`)};
  ${({ showAt }) => showAt && media(showAt, 'display: none')};
  flex-wrap: ${({ flexWrap }) => flexWrap && 'wrap'};
  flex-direction: ${({ flexDirection }) => flexDirection};
  ${({ align }) => mediaProp('align-items', align)};
  ${({ justify }) => mediaProp('justify-content', justify)};
  ${({ p }) => mediaProp('padding', p)};
  ${({ pt }) => mediaProp('padding-top', pt)};
  ${({ pb }) => mediaProp('padding-bottom', pb)};
  ${({ pr }) => mediaProp('padding-right', pr)};
  ${({ pl }) => mediaProp('padding-left', pl)};
  ${({ m }) => mediaProp('margin', m)};
  ${({ mt }) => mediaProp('margin-top', mt)};
  ${({ mb }) => mediaProp('margin-bottom', mb)};
  ${({ mr }) => mediaProp('margin-right', mr)};
  ${({ ml }) => mediaProp('margin-left', ml)};
`;

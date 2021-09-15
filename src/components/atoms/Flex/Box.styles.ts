import styled from 'styled-components';
import { BreakpointType, RulesType } from 'types/flex';
import { media, mediaList } from 'styles/media';

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
  align?: AlignType | RulesType<AlignType>;
  justify?: AlignType | RulesType<AlignType>;
  hideAt?: BreakpointType;
  showAt?: BreakpointType;
  p?: string | RulesType;
  pt?: string | RulesType;
  pb?: string | RulesType;
  pr?: string | RulesType;
  pl?: string | RulesType;
  m?: string | RulesType;
  mt?: string | RulesType;
  mb?: string | RulesType;
  mr?: string | RulesType;
  ml?: string | RulesType;
}

const formatAlignValue = (
  prop: 'align-items' | 'justify-content',
  value: string | RulesType | undefined
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

const mediaProp = (prop: string, rule: string | RulesType | undefined) => {
  if (typeof rule === 'object') {
    return mediaList(
      (Object.keys(rule) as BreakpointType[]).reduce((acc, key) => {
        acc[key] = mediaProp(prop, rule[key]) as string;
        return acc;
      }, {} as Record<BreakpointType, string>)
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

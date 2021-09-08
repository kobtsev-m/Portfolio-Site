import React from 'react';
import styled from 'styled-components';

interface RuleType {
  [key: string]: string;
}
type RulesetType = Array<RuleType>;

const size;

const makeResponsive = (ruleset: RulesetType, tagName = 'div') =>
  styled(tagName)`
    ${buildStyles(ruleset)};
  `;

const buildStyles = (ruleset: RulesetType) => {
  return ruleset.reduce(
    (cssString, { width, rules }) =>
      `${cssString} @media (min-width: ${width}) { ${rules} }`,
    ''
  );
};

export const hideAt = (breakpoints) => {
  const rulesets = Object.entries(breakpoints).reduce(
    (rulesets, [constraint, width]) => [
      ...rulesets,
      {
        constraint,
        width,
        rules: `display: none;`
      }
    ],
    []
  );

  return makeResponsiveComponent(rulesets);
};

export const Breakpoint = ({ min, max, children }) => {
  const Component = hideAt({ min, max });
  return <Component>{children}</Component>;
};

export default makeResponsiveComponent;

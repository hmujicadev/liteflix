import React from 'react';
import {Span} from './SpanText.styles';
import {string, node, oneOfType, arrayOf} from 'prop-types';

const SpanText = ({color, font, weight, padding, width, children}) => {
  return (
    <Span color={color} font={font} width={width} weight={weight} padding={padding}>
      {children}
    </Span>
  );
};

SpanText.propTypes = {
  color: string,
  font: string,
  weight: string,
  padding: string,
  width: string,
  children: oneOfType([arrayOf(node), node]).isRequired,
};
export default SpanText;

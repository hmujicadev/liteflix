import React from 'react'
import {Span} from './SpanText.styles'

const SpanText = ({color,font,weight,children }) => {
  return (
  <Span color={color} font={font} weight={weight}>{children}</Span>
  )
}

export default SpanText

import React from 'react'
import {Span} from './SpanText.styles'

const SpanText = ({color,font,weight,padding,width,children }) => {
  return (
  <Span color={color} font={font} width={width} weight={weight} padding={padding}>{children}</Span>
  )
}

export default SpanText

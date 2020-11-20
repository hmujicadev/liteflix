import styled from 'styled-components';

export const Span = styled.span`
  font-size: ${props => (props.font ? props.font : '14px')};
  color: ${props => (props.color ? props.color : 'black')};
  font-weight: ${props => (props.weight ? props.weight : 'normal')};
  padding: ${props => (props.padding ? props.padding : '0')};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: ${props => (props.width ? props.width : '')};
`;

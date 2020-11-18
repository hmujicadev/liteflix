import styled from 'styled-components';

export const UpcomingContainer = styled.div`
  max-width:1200px;
  width:100%;
  margin:0 auto;
  height:auto;
  z-index: 4;
  display:flex;
  flex-direction:column;
  align-items:flex-start;

`;

export const UpcomingSubTitle = styled.span`
  font-size:${props => props.font?props.font:'18px'};
  color:#fff;
  margin:${props=>props.margin?props.margin:''};
  font-weight: bold;
`

export const UpcomingSubTitle = styled.div`
  font-size:${props => props.font?props.font:'18px'};
  color:#fff;
  margin:${props=>props.margin?props.margin:''};
  font-weight: bold;
`
import styled from 'styled-components';

export const UserProfileWrapper = styled.div``;
export const UserProfileImg = styled.img`
  max-width: 100%;
  width:${props => props.size ? props.size : ''};
  margin:${props => props.margin ? props.margin : ''};
`;

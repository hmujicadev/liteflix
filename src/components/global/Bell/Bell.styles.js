import styled from 'styled-components';

export const BellWrapper = styled.div`
  width: 16px;
  position: relative;
`;

export const BellImage = styled.img`
  width: 100%;
`;

export const BellAlert = styled.div`
  width: 5px;
  height: 5px;
  top: 3px;
  right: 2px;
  border-radius: 50%;
  background-color: red;
  position: absolute;
`;

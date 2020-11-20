import styled, {keyframes} from 'styled-components';
import {device} from '../../../styles/media';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const SpinnerWrapper = styled.div`

  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Spinner = styled.img`
  animation: ${rotate} 2s linear infinite;
  max-width: 100px;
  @media ${device.mobileL} {
    max-width: 70px;
  }
`;

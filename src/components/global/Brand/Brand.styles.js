import styled from 'styled-components';
import {device} from '../../../styles/media';

export const BrandWrapper = styled.div`
  transition:all 300ms ease;

  @media ${device.tablet} {
    transform: ${({sidebarOpen}) => (sidebarOpen ? 'translate(calc(-36vw))' : 'translate(0px)')};
  }
  @media ${device.mobileL} {
    padding-top: 5px;
    transform: ${({sidebarOpen}) => (sidebarOpen ? 'translate(calc(-25vw))' : 'translate(0px)')};
  }
  @media ${device.mobileS} {
    transform: ${({sidebarOpen}) => (sidebarOpen ? 'translate(calc(-20vw))' : 'translate(0px)')};
  }

`;

export const BrandImage = styled.img`
  height: 27px;
  width: 95px;
`;

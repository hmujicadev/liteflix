import styled from 'styled-components';
import {device} from '../../../styles/media';

export const BrandWrapper = styled.div`
  line-height: 4.5;
  margin: 0 30px 0 0;
  padding: 0 0 0 10px;
  width: 95px;
  transition:all 300ms ease;

  @media ${device.tablet} {
    transform: ${({sidebarOpen}) => (sidebarOpen ? 'translate(calc(-200% - 100px))' : 'translate(0px)')};
    line-height: 4.5;
    align-self: center;
    margin:0;
    padding:0;
  }
  @media ${device.mobileL} {
    transform: ${({sidebarOpen}) => (sidebarOpen ? 'translate(calc(-100% - 5px))' : 'translate(0px)')};
  }
  @media ${device.mobileS} {
    transform: ${({sidebarOpen}) => (sidebarOpen ? 'translate(calc(-100% + 25px))' : 'translate(0px)')};
  }

`;

export const BrandImage = styled.img`
  height: 27px;
  width: 95px;
`;

import styled from 'styled-components';
import { device } from '../../styles/media';

export const FeaturedSectionWrapper = styled.section`
  width: 100%;
  position: relative;
  height: auto;
`;

export const FeaturedSectionImage = styled.img`
  width: 100%;
  z-index: -1;
  position: absolute;
  pointer-events: none;
`;
export const FeaturedSectionOverlay = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  z-index: 2;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.2) 70%, #000000);
  pointer-events: none;
`;

export const FeaturedContainer = styled.div`
  position: relative;
  top: 0;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  height: auto;
  z-index: 4;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 109px 0 0 0;
  @media ${device.laptop}{
    align-items:center;
  }
`;

export const FeaturedPreTitle = styled.span`
  font-size: 24px;
  color: #fff;
  text-transform: uppercase;
  margin: 0 0 18px 0;
  @media ${device.laptop}{
    font-size: 18px;
  }
`;
export const FeaturedTitle = styled.h2`
  font-size: 110px;
  max-width: 45%;
  color: #fff;
  line-height: 0.92;
  margin: 0 0 19px 0;
  @media ${device.laptop}{
    text-align:center;
    font-size: 72px;
    max-width: 60%;
  }
`;
export const FeaturedOptionsWrapper = styled.div`
  display: flex;
  margin: 0 0 25px 0;
  @media ${device.mobileL}{
    & button:nth-child(2){
       display:none;
    }
  }
`;
export const FeaturedOption = styled.button`
  width: 160px;
  font-size: 16px;
  display: flex;
  align-items: center;
  border-radius: 20px;
  color: #fff;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  cursor: pointer;
  &:nth-child(2) {
    margin: 0 30px 0 0;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
  @media ${device.mobileL}{
    justify-content:center;
    & :nth-child(1){
       margin: 0;
    }
  }
`;
export const FeaturedOptionMobile = styled.button`
width: 30px;
height:30px;
font-size: 14px;
display: flex;
align-items: center;
border-radius: 50%;
color: #fff;
padding: 5px;
border: 0.5px solid #fff;
position:absolute;
right:15px;
bottom: 25px;
display:none;
background-color:inherit;
cursor: pointer;
/* &:hover {
  color:#000;
  background-color: #fff;
} */

@media ${device.mobileL}{
  display:block;
}
`;



export const FeaturedSubTitle = styled.span`
  font-size: ${props => (props.font ? props.font : '18px')};
  color: #fff;
  margin: ${props => (props.margin ? props.margin : '')};
  font-weight: bold;
`;
export const OverviewWrapper = styled.div`
  max-width: 45%;
  min-height: 168px;
  max-height: 168px;
  display: flex;
  flex-direction: column;
  margin: 0 0 17px 0;
  @media ${device.laptop}{
    display:none;
  }
`;
export const Overview = styled.p`
  font-size: 18px;
  color: #fff;
`;

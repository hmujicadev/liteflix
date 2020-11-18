import styled from 'styled-components';

export const FeaturedSectionWrapper = styled.section`
  width: 100%;
  position: relative;
  height: auto;
`;

export const FeaturedSectionImage = styled.img`
  width: 100%;
  z-index: -1;
  position: absolute;
`;
export const FeaturedSectionOverlay = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  z-index: 2;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.2) 70%, #000000);
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
`;

export const FeaturedPreTitle = styled.span`
  font-size: 24px;
  color: #fff;
  text-transform: uppercase;
  margin: 0 0 18px 0;
`;
export const FeaturedTitle = styled.h2`
  font-size: 110px;
  max-width: 45%;
  color: #fff;
  line-height: 0.92;
  margin: 0 0 19px 0;
`;
export const FeaturedOptionsWrapper = styled.div`
  display: flex;
  margin: 0 0 25px 0;
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
  &:first-child {
    margin: 0 30px 0 0;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
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
`;
export const Overview = styled.p`
  font-size: 18px;
  color: #fff;
  text-align: ;
`;

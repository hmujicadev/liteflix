import styled from 'styled-components';

export const FeaturedSectionWrapper = styled.section`
  width:100vw;
  position:relative;
`;

export const FeaturedSectionImage = styled.img`
  width: 100vw;
  z-index: 2;
`;

export const FeaturedSectionOverlay = styled.div`
  position:absolute;
  height:100%;
  width: 100vw;
  z-index: 3;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.2) 70%, #000000);
`;



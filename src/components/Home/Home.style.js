import styled from 'styled-components';
import COVER_PAGE_WRAPPER_URL from '../../assets/images/cover-page.png';

export const CoverPageWrapper = styled.div`
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.7855917366946778) 0%,
    rgba(0, 0, 0, 0.8855917366946778) 5%,
    rgba(0, 0, 0, 0.9855917366946778) 10%,
    rgba(0, 0, 0, 1) 91%
  );
  height: 500px;
  width: 100%;
  z-index: 5;
`;

export const FeaturedSection = styled.section`
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





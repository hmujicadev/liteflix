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
  position: absolute;
  top: 95vh;
`;

export const CoverPageBackgroundImage = styled.img`
  width: 100%;
  z-index: 2;
`;

import styled from 'styled-components';
import {device} from '../../styles/media';
import {motion} from 'framer-motion';

export const UpcomingContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto 40px auto;
  height: auto;
  z-index: 4;
  @media ${device.mobileL} {
    width: auto;
    padding: 0 15px;
  }
`;

export const UpcomingSubTitle = styled(motion.h3)`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  margin: 0 0 10px 2px;
`;

export const UpcomingCardWrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, 255px);
  grid-template-rows: minmax(auto, 155px);
  column-gap: 31px;
  row-gap: 10px;
  justify-content: space-between;
  @media ${device.laptop} {
    justify-content: center;
    grid-template-columns: repeat(3, 255px);
  }
  @media ${device.tablet} {
    justify-content: center;
    grid-template-columns: repeat(2, 255px);
  }
  @media ${device.mobileL} {
    justify-content: flex-start;
    grid-template-columns: 100%;
    grid-template-rows: auto;
  }
`;

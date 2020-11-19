import styled from 'styled-components';
import {device} from '../../styles/media';

export const PopularSectionWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 40px auto;
  @media ${device.mobileL} {
    width: auto;
    padding: 0 15px;
  }
`;
export const PopularSectionTitle = styled.h3`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  margin: 0 0 10px 0;
`;
export const PopularCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 255px);
  grid-template-rows: minmax(auto, 510px);
  column-gap: 31px;
  row-gap: 10px;
  justify-content: space-between;
  @media ${device.laptop} {
    justify-content: center;
    grid-template-columns: repeat(3, 255px);
  }
  @media ${device.tablet} {
    justify-content: center;
    gap: 5px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 328px 328px;
  }
`;

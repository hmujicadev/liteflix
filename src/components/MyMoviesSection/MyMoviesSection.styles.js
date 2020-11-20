import styled from 'styled-components';
import {device} from '../../styles/media';


export const MyMoviesSectionWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 40px auto;
  @media ${device.mobileL} {
    width: auto;
    padding: 0 15px;
  }
`;
export const MyMoviesSectionTitle = styled.h3`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  margin: 0 0 10px 0;
`;
export const MyMoviesCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 255px);
  grid-template-rows:minmax(auto,155px);
  column-gap:31px;
  row-gap:10px;
  justify-content:space-between;
  @media ${device.laptop}{
      justify-content:center;
      grid-template-columns: repeat(3,255px);
    }
  @media ${device.tablet}{
      justify-content:center;
      grid-template-columns: repeat(2,255px);
    }
  @media ${device.mobileL}{
      justify-content:flex-start;
      grid-template-columns: 100%;
      grid-template-rows:auto;
    }
`;

import styled from 'styled-components';
import {device} from '../../../styles/media';
import {motion} from 'framer-motion';

export const AddMovieFormWrapper = styled(motion.div)`
  background-color: ${({success}) => (success ? '#7ed321' : '#fff')};
  width: 650px;
  border-radius: 10px;
  padding: 40px 40px 25px 40px;
  transition: all 300ms ease;
  @media ${device.mobileL} {
    width: 94vw;
    margin: 0 auto;
    padding: 3vw;
  }
`;

export const MovieForm = styled.form`
  @media ${device.mobileL} {
    padding: 30px 15px 0 15px;
  }
`;

export const InputFormWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  margin-bottom: 40px;

  @media ${device.mobileL} {
    grid-template-columns: 1fr;
  }
`;
export const UploadMovieButtonWrapper = styled.div`
  width: 100%;
  text-align: center;
`;
export const UploadMovieButton = styled.button`
  border: none;
  cursor: pointer;
  color: #fff;
  width: 350px;
  height: 70px;
  border-radius: 35px;
  background-color: #000;
  transition: all 300ms ease;
  &:disabled {
    cursor: not-allowed;
    background-color: #dedede;
  }

  @media ${device.mobileL} {
    width: 100%;
  }
`;

export const SuccessWrapper = styled.div``;
export const SuccessText = styled.p`
  margin: 20px 0 40px 0;
  width: 85%;
  font-size: 24px;
  & span {
    font-size: 30px;
    font-weight: 500;
    width: 100%;
  }
`;
export const SuccessCloseButton = styled.button`
  border: none;
  outline: none;
  width: 192px;
  height: 70px;
  border-radius: 35px;
  background-color: #000000;
  color: #fff;
  cursor: pointer;
`;

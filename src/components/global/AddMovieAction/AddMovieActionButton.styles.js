import styled from 'styled-components';
import {motion} from 'framer-motion';

export const AddMovieButtonWrapper = styled(motion.div)``;

export const AddMovieButton = styled(motion.button)`
  width: ${({animated}) => animated ? 0 : '174px'};
  min-width: 40px;
  height: 40px;
  background-color: red;
  border: none;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 12px;
  cursor: pointer;
`;

export const AddMovieButtonImage = styled.img`
  width: 100%;
`;

export const AddMovieButtonText = styled(motion.span)`
  display: ${({animated}) => animated ? 'none' : 'block'};
  margin: 0 0 0 5px;
  color: #fff;
  font-size: 16px;
  white-space: nowrap;
`;

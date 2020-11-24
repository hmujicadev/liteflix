import styled from 'styled-components';
import {AnimatePresence, motion} from 'framer-motion';
import {device} from '../../../styles/media';

export const AnimatedModalPresence = styled(AnimatePresence)``;

export const ModalWrapper = styled(motion.div)`
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  cursor: pointer;
  align-items: center;
`;

export const StyledModal = styled.div`
  position: relative;
  cursor: default;
`;

export const ModalContent = styled.div`
  margin: 0 auto;
  @media ${device.mobileL} {
    max-width: 97%;
  }
`;

export const ModalCloseWrapper = styled.div`
  cursor: pointer;
  font-size: 18px;
  color: #000;
  position: absolute;
  top: 15px;
  right: 15px;
  @media ${device.mobileL} {
    padding: 10px;
  }
`;

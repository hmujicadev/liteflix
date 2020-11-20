import styled from 'styled-components';
import {motion, AnimatePresence} from 'framer-motion';

export const MainLoaderWrapper = styled(motion.div)`
  width: 100%;
  height: 100vh;
  display: grid;
  align-items: center;
  background-color: #000000;
  position: absolute;
`;

export const MainWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const AnimatePresenceStyled = styled(AnimatePresence)`
  width: 100%;
  position: relative;
`;

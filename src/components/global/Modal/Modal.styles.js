import styled from 'styled-components';

export const ModalWrapper = styled.div`
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

export const ModalContent = styled.div``;

export const ModalCloseWrapper = styled.div`
  cursor: pointer;
  font-size: 18px;
  color: #000;
  position: absolute;
  top: 15px;
  right: 15px;
`;
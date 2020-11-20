import React from 'react';
import {oneOfType, arrayOf, node, func, bool} from 'prop-types';
import {
  AnimatedModalPresence,
  ModalWrapper,
  StyledModal,
  ModalContent,
  ModalCloseWrapper,
} from './Modal.styles';
import {VscClose} from 'react-icons/vsc';

const Modal = ({children, isOpen = true, setOpen}) => {
  const modalVariants = {
    initial: {
      scale: 0.2,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {type: 'spring', restSpeed: 0.5},
    },
    exit: {
      scale:0.8,
      opacity: 0,
   
    },
  };
  return (
    <AnimatedModalPresence>
      {isOpen ? (
        <ModalWrapper key="modalAnimated" {...modalVariants} onClick={() => setOpen(false)}>
          <StyledModal onClick={e => e.stopPropagation()}>
            <ModalCloseWrapper onClick={() => setOpen(false)}>
              <VscClose />
            </ModalCloseWrapper>
            <ModalContent>{children}</ModalContent>
          </StyledModal>
        </ModalWrapper>
      ) : null}
    </AnimatedModalPresence>
  );
};

Modal.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
  isOpen: bool,
  setOpen: func,
};

export default Modal;

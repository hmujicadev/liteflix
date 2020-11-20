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
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
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

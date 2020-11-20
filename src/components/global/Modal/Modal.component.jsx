import React from 'react';
import {oneOfType, arrayOf, node, func, bool} from 'prop-types';
import {ModalWrapper, StyledModal, ModalContent, ModalCloseWrapper} from './Modal.styles';
import {VscClose} from 'react-icons/vsc';

const Modal = ({children, isOpen = true, setOpen}) => {
  return (
    <>
      {isOpen ? (
        <ModalWrapper onClick={() => setOpen(false)}>
          <StyledModal onClick={e => e.stopPropagation()}>
            <ModalCloseWrapper onClick={() => setOpen(false)}>
              <VscClose />
            </ModalCloseWrapper>
            <ModalContent>{children}</ModalContent>
          </StyledModal>
        </ModalWrapper>
      ) : null}
    </>
  );
};

Modal.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
  isOpen: bool,
  setOpen: func,
};

export default Modal;

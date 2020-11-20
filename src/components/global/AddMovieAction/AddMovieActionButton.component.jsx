import React, {useContext, useState} from 'react';
import {bool} from 'prop-types';
import {
  AddMovieButtonWrapper,
  AddMovieButton,
  AddMovieButtonText,
} from './AddMovieActionButton.styles';
import {MoviesContext} from '../../../context/moviesContext';
import {FaPlus} from 'react-icons/fa';

const AddMovieActionButton = ({animated}) => {
  const {setOpenModal} = useContext(MoviesContext);
  const [expandButton, setExpandButton] = useState(false);

  const variants = {
    open: {
      width: '174px',
      transition: {
        duration: 0.5,
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
    closed: {
      width: 0,
      transition: {
        duration: 0.2,
        when: 'afterChildren',
      },
    },
  };
  const variantsText = {
    open: {
      display: 'block',
    },
    closed: {
      display: 'none',
    },
  };
  const animatedProps = {
    animate: expandButton ? 'open' : 'closed',
    variants: variants,
    onMouseEnter: () => setExpandButton(true),
    onMouseLeave: () => setExpandButton(false),
  };
  return (
    <AddMovieButtonWrapper>
      <AddMovieButton
        onClick={() => setOpenModal(true)}
        animated={animated}
        {...(animated ? {...animatedProps} : {})}>
        <FaPlus color="#fff" size="16px" />
        <AddMovieButtonText animated={animated} {...(animated ? {variants: variantsText} : {})}>
          Agregar Película
        </AddMovieButtonText>
      </AddMovieButton>
    </AddMovieButtonWrapper>
  );
};
AddMovieActionButton.defaultProps = {
  animated: true,
};

AddMovieActionButton.propTypes = {
  animated: bool,
};

export default AddMovieActionButton;

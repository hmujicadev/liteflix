import React from 'react';
import {
  AddMovieButtonWrapper,
  AddMovieButton,
  AddMovieButtonImageWrapper,
  AddMovieButtonImage,
  AddMovieButtonText,
} from './AddMovieActionButton.styles';

import {FaPlus} from 'react-icons/fa';

const AddMovieActionButton = () => {
  return (
    <AddMovieButtonWrapper>
      <AddMovieButton>
        <FaPlus color="#fff" size="16px" />

        <AddMovieButtonText>Agregar Película</AddMovieButtonText>
      </AddMovieButton>
    </AddMovieButtonWrapper>
  );
};

export default AddMovieActionButton;

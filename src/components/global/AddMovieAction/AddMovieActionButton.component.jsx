import React from 'react';
import {
  AddMovieButtonWrapper,
  AddMovieButton,
  AddMovieButtonImageWrapper,
  AddMovieButtonImage,
  AddMovieButtonText,
} from './AddMovieActionButton.styles';
import PlusImageURL from '../../../assets/images/plus.png';

const AddMovieActionButton = () => {
  return (
    <AddMovieButtonWrapper>
      <AddMovieButton>
        <AddMovieButtonImageWrapper>
          <AddMovieButtonImage src={PlusImageURL} />
        </AddMovieButtonImageWrapper>

        <AddMovieButtonText></AddMovieButtonText>
      </AddMovieButton>
    </AddMovieButtonWrapper>
  );
};

export default AddMovieActionButton;

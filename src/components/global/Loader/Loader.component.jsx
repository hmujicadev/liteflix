import React from 'react';
import SPINNER_URL from '../../../assets/images/spinner.png';
import {SpinnerWrapper, Spinner} from './Loader.styles';

const Loader = () => {
  return (
    <SpinnerWrapper>
      <Spinner src={SPINNER_URL} />
    </SpinnerWrapper>
  );
};

export default Loader;

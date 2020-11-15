import React from 'react';
import {BellWrapper, BellImage, BellAlert} from './Bell.styles';
import BellImageURL from '../../../assets/images/bell.png';

const Bell = () => {
  return (
    <BellWrapper>
      <BellImage src={BellImageURL} />
      <BellAlert />
    </BellWrapper>
  );
};

export default Bell;

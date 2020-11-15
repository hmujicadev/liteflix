import React from 'react';
import {BrandWrapper, BrandImage} from './Brand.styles';
import BrandURL from '../../../assets/images/liteflix.png';

const Brand = () => {
  return (
    <BrandWrapper>
      <BrandImage src={BrandURL} />
    </BrandWrapper>
  );
};

export default Brand;

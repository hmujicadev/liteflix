import React from 'react';
import {BrandWrapper, BrandImage} from './Brand.styles';
import BrandURL from '../../../assets/images/liteflix.png';

const Brand = ({sidebarOpen}) => {
  return (
    <BrandWrapper sidebarOpen={sidebarOpen}>
      <BrandImage src={BrandURL} />
    </BrandWrapper>
  );
};

export default Brand;

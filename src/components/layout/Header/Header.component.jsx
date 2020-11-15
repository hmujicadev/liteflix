import React from 'react';
import {NAVBAR_ITEMS} from '../../../constants';
import Brand from '../../global/Brand/Brand.component';
import {HeaderWrapper, StyledHeader, NavBar, NavBarList, NavBarItem} from './Header.styles';
import AddMovieActionButton from '../../global/AddMovieAction/AddMovieActionButton.component';
const Header = () => {
  return (
    <HeaderWrapper>
      <StyledHeader>
        <Brand />
        <NavBar>
          <NavBarList>
            {NAVBAR_ITEMS.map(item => (
              <NavBarItem key={item}>{item}</NavBarItem>
            ))}
            <AddMovieActionButton />
          </NavBarList>
        </NavBar>
      </StyledHeader>
    </HeaderWrapper>
  );
};

export default Header;

import React from 'react';
import {NAVBAR_ITEMS} from '../../../constants';
import Brand from '../../global/Brand/Brand.component';
import {HeaderWrapper, StyledHeader, NavBar, NavBarList, NavBarItem} from './Header.styles';
import AddMovieActionButton from '../../global/AddMovieAction/AddMovieActionButton.component';
import UserMenu from './UserMenu/UserMenu.component';
import Sidebar from './Sidebar/Sidebar.component';

const Header = () => {
  return (
    <HeaderWrapper>
      <StyledHeader>
        <NavBar>
          <Brand />
          <NavBarList>
            {NAVBAR_ITEMS.map(item => (
              <NavBarItem key={item}>{item}</NavBarItem>
            ))}
            <AddMovieActionButton />
          </NavBarList>
        </NavBar>
        <UserMenu />
      </StyledHeader>
      <Sidebar />
    </HeaderWrapper>
  );
};

export default Header;

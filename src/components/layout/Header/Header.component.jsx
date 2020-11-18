import React, {useState} from 'react';
import {NAVBAR_ITEMS} from '../../../constants';
import Brand from '../../global/Brand/Brand.component';
import {HeaderWrapper, StyledHeader, NavBar, NavBarList, NavBarItem ,MenuWrapper} from './Header.styles';
import AddMovieActionButton from '../../global/AddMovieAction/AddMovieActionButton.component';
import UserMenu from './UserMenu/UserMenu.component';
import Sidebar from './Sidebar/Sidebar.component';
import { AiOutlineMenu } from 'react-icons/ai';



const Header = () => {

  const [sidebarOpen,setSidebarOpen] = useState(false);

  const toggleOpen = () => setSidebarOpen(!sidebarOpen);

  return (
    <HeaderWrapper>
      <StyledHeader>
        <NavBar>
          <MenuWrapper onClick={()=>toggleOpen()}>
            <AiOutlineMenu color='#fff'/>
          </MenuWrapper>
          <Brand sidebarOpen={sidebarOpen} />
          <NavBarList>
            {NAVBAR_ITEMS.map(item => (
              <NavBarItem key={item}>{item}</NavBarItem>
            ))}
            <AddMovieActionButton />
          </NavBarList>
        </NavBar>
        <UserMenu />
      </StyledHeader>
      <Sidebar toggleOpen={toggleOpen} isOpen={sidebarOpen}/>
    </HeaderWrapper>
  );
};

export default Header;

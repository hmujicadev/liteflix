import React, {useState} from 'react';
import {NAVBAR_ITEMS} from '../../../constants';
import Brand from '../../global/Brand/Brand.component';
import {
  HeaderWrapper,
  StyledHeader,
  NavBar,
  NavBarList,
  NavBarItem,
  MenuWrapper,
} from './Header.styles';
import AddMovieActionButton from '../../global/AddMovieAction/AddMovieActionButton.component';
import UserMenu from './UserMenu/UserMenu.component';
import Sidebar from './Sidebar/Sidebar.component';
import {IoIosMenu} from 'react-icons/io';
import SpanText from '../../../components/global/SpanText/SpanText.component';
import { useScrollPosition } from '@n8tb1t/use-scroll-position'


const Header = ({setOpenModal}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleOpen = () => setSidebarOpen(!sidebarOpen);

  const [scrollOnTop, setScrollOnTop] = useState(true)

  useScrollPosition(({ prevPos, currPos }) => {
    if(scrollOnTop!=currPos.y<-50)
    (currPos.y<0)?setScrollOnTop(true):setScrollOnTop(false);
  }, [scrollOnTop])
 
  return (
    <HeaderWrapper scrollOnTop={scrollOnTop}>
      <StyledHeader>
        <NavBar>
          <MenuWrapper onClick={() => toggleOpen()}>
            <IoIosMenu color="#fff" />
          </MenuWrapper>
          <Brand sidebarOpen={sidebarOpen} />
          <NavBarList>
            {NAVBAR_ITEMS.map(item => (
              <NavBarItem key={item}>{item}</NavBarItem>
            ))}
            <AddMovieActionButton>
              <SpanText margin="0 0 0 10px">Agregar Película</SpanText>
            </AddMovieActionButton>
          </NavBarList>
        </NavBar>
        <UserMenu />
      </StyledHeader>
      <Sidebar toggleOpen={toggleOpen} isOpen={sidebarOpen} />
    </HeaderWrapper>
  );
};

export default Header;

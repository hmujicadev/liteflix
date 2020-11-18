import styled from 'styled-components';
import {device} from '../../../styles/media';

export const HeaderWrapper = styled.div`
  max-width: 1200px;
  max-height: 70px;
  height: 70px;
  margin: 0 auto;
  position: relative;
  z-index: 10;
  padding: 0 10px 0 10px;
  @media ${device.tablet} {
    padding: 0 10px 0 10px;
  }
`;

export const StyledHeader = styled.header`
  width: 100%;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  height: inherit;
  position:fixed;
  z-index:15;
`;

export const NavBar = styled.nav`
  display: flex;
  flex: 0 0 50%;
  @media ${device.tablet} {
    flex: 0 0 100%;
    display: flex;
    justify-content: center;
  }

`;

export const NavBarList = styled.ul`
  display: flex;
  font-size: 14px;
  flex: 0 0 100%;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  &:nth-child(n) {
    cursor: pointer;
  }

  @media ${device.tablet} {
    display: none;
  }
`;
export const NavBarItem = styled.li`
  &:first-child {
    font-weight: bold;
  }
`;
export const MenuWrapper = styled.div`
  display:none;
  height:70px;
  line-height:4.5;
  position: absolute;
  left:10px;
  &>svg{
    font-size:25px;
    
  }
  @media ${device.tablet} {
   display:block;
  }
`;




export const UserMenuWrapper = styled.div``;

export const UserMenu = styled.div``;

export const UserMenuList = styled.ul``;

export const UserMenuListItem = styled.li``;

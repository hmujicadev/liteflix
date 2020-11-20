import styled from 'styled-components';
import {device} from '../../../styles/media';

export const HeaderWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  position: fixed;
  z-index: 10;
  display: flex;
  justify-content: center;
  background-color: ${({scrollOnTop}) => (scrollOnTop ? 'rgba(0,0,0,0.84)' : 'transparent')};

  padding: 10px 0;
  /*   @media ${device.mobileL}{
      max-width:100%;
      grid-template-columns: repeat(3,255px);
    } */
`;

export const StyledHeader = styled.header`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  height: inherit;
  z-index: 15;
`;

export const NavBar = styled.nav`
  display: flex;
  @media ${device.tablet} {
    flex: 0 0 100%;
    display: flex;
    justify-content: center;
  }
`;

export const NavBarList = styled.ul`
  display: flex;
  flex: 0 0 100%;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  margin: 0 0 0 30px;
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
  &:nth-child(n):hover{
    color:gray;
  }
`;
export const MenuWrapper = styled.div`
  display: none;
  height: 70px;
  position: absolute;
  top: 10px;
  left: 10px;
  & > svg {
    font-size: 29px;
  }
  @media ${device.tablet} {
    display: block;
  }
`;

export const UserMenuWrapper = styled.div``;

export const UserMenu = styled.div``;

export const UserMenuList = styled.ul``;

export const UserMenuListItem = styled.li``;

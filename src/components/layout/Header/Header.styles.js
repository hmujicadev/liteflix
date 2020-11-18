import styled from 'styled-components';
import {device} from '../../../styles/media';

export const HeaderWrapper = styled.div`
  max-width: 1200px;
  height: 60px;
  margin: 10px auto 0 auto;
  position: relative;
  z-index: 10;
  display:flex;
`;

export const StyledHeader = styled.header`
  width:100%;
  max-width:1200px;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  height: inherit;
  position: fixed;
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
  display: none;
  height: 70px;
  line-height: 3.7;
  position: absolute;
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

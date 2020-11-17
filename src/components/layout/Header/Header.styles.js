import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  max-width: 1200px;
  max-height: 70px;
  height: 70px;
  margin: 0 auto;
  position: relative;
  z-index: 10;
  padding: 0 10px 0 10px;
`;

export const StyledHeader = styled.header`
  width: 100%;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  height: inherit;
`;

export const NavBar = styled.nav`
  display: flex;
  flex: 0 0 50%;
`;

export const NavBarList = styled.ul`
  font-size: 14px;
  flex: 0 0 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  &:nth-child(n) {
    cursor: pointer;
  }
`;
export const NavBarItem = styled.li`
  &:first-child {
    font-weight: bold;
  }
`;

export const UserMenuWrapper = styled.div``;

export const UserMenu = styled.div``;

export const UserMenuList = styled.ul``;

export const UserMenuListItem = styled.li``;

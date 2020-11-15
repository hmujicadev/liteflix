import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  max-width: 1200px;
  max-height: 67px;
  height: 67px;
  margin: 0 auto;
  position: relative;
`;

export const StyledHeader = styled.header`
  width: 100%;
  background-color: lightgray;
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
  margin: 0;
  padding: 0;
  flex: 0 0 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
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

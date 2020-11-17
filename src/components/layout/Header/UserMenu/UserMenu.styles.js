import styled from 'styled-components';

export const UserMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 0 0 15%;
  position: relative;
`;

export const UserMenuList = styled.ul`
  display: flex;
  flex: 0 0 100%;
  align-items: center;
  justify-content: space-between;
  align-self: right;
  margin: 10px 0 0 0;
`;

export const DropdownWrapper = styled.div`
  min-width: 130px;
  min-height: 160px;
  background-color: gray;
  position: absolute;
  top: 60px;
  right: 20%;
  padding: 10px;
`;

export const DropdownUpArrowWrapper = styled.div`
  position: relative;
`;

export const DropdownUpArrow = styled.div`
  width: 0px;
  height: 0px;
  border-left: 15px solid transparent; /* izquierda flecha */
  border-right: 15px solid transparent; /* derecha flecha */
  border-bottom: 15px solid gray; /* base flecha y color*/
  font-size: 0px;
  line-height: 0px;
  position: absolute;
  top: -13px;
  right: 35px;
`;

export const DropdownList = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const DropdownItemWrapper = styled.div``;

export const DropdownItem = styled.li``;

export const UserMenuItem = styled.li``;

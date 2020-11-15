import React from 'react';
import {
  UserMenuWrapper,
  UserMenuList,
  UserMenuItem,
  DropdownWrapper,
  DropdownUpArrowWrapper,
  DropdownUpArrow,
  DropdownList,
  DropdownItem,
  DropdownItemWrapper,
} from './UserMenu.styles';
import Bell from '../../../global/Bell/Bell.component';

const UserMenu = () => {
  return (
    <UserMenuWrapper>
      <UserMenuList>
        <UserMenuItem>Niños</UserMenuItem>
        <UserMenuItem>
          <Bell />
        </UserMenuItem>
        <UserMenuItem>Niños</UserMenuItem>
        <UserMenuItem>Niños</UserMenuItem>
      </UserMenuList>
      <DropdownWrapper>
        <DropdownUpArrowWrapper>
          <DropdownUpArrow />
          <DropdownList>
            <DropdownItemWrapper>
              <DropdownItem>test1</DropdownItem>
            </DropdownItemWrapper>
            <DropdownItemWrapper>
              <DropdownItem>test2</DropdownItem>
            </DropdownItemWrapper>
            <DropdownItemWrapper>
              <DropdownItem>test3</DropdownItem>
            </DropdownItemWrapper>
            <DropdownItemWrapper>
              <DropdownItem>test4</DropdownItem>
            </DropdownItemWrapper>
            <DropdownItemWrapper>
              <DropdownItem>test5</DropdownItem>
            </DropdownItemWrapper>
            <DropdownItemWrapper>
              <DropdownItem>test6</DropdownItem>
            </DropdownItemWrapper>
          </DropdownList>
        </DropdownUpArrowWrapper>
      </DropdownWrapper>
    </UserMenuWrapper>
  );
};

export default UserMenu;

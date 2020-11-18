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
  BellAlert,
} from './UserMenu.styles';
import {FaRegBell} from 'react-icons/fa';
import {BsChevronDown} from 'react-icons/bs';
import UserProfile from '../../../global/UserProfile/UserProfile.component';
import SpanText from '../../../global/SpanText/SpanText.component'


const UserMenu = () => {
  return (
    <UserMenuWrapper>
      <UserMenuList>
        <UserMenuItem>Niños</UserMenuItem>
        <UserMenuItem>
          <BellAlert />
          <FaRegBell />
        </UserMenuItem>
        <UserMenuItem>
          <UserProfile  size="25px" margin="5px 5px 0 0" />
          <BsChevronDown color="#fff" />
        </UserMenuItem>
      </UserMenuList>
      <DropdownWrapper>
      <DropdownUpArrow />
        <DropdownUpArrowWrapper>
          
          <DropdownList>
            <DropdownItemWrapper>
              <DropdownItem activeUser>
              <UserProfile variant='pink'  size="25px" margin="5px 5px 0 0" />
                <SpanText font='12px'>
                Ernesto G…
                </SpanText>
                </DropdownItem>
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

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
import SpanText from '../../../global/SpanText/SpanText.component';

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
          <UserProfile size="25px" margin='0 5px 0 0'/>
          <BsChevronDown color="#fff" />
        </UserMenuItem>
      </UserMenuList>
      <DropdownWrapper>
        <DropdownUpArrow />
        <DropdownUpArrowWrapper>
          <DropdownList>
            <DropdownItemWrapper>
              <DropdownItem activeUser>
                <UserProfile
                  variant="pink"
                  padding="5px 0 5px 6px"
                  size="25px"
                  margin="0 8px 0 0"
                />
                <SpanText font="12px" width="75px">
                  Ernesto Garmendia
                </SpanText>
              </DropdownItem>
            </DropdownItemWrapper>
            <DropdownItemWrapper>
              <DropdownItem>
                <UserProfile
                  variant="gray"
                  padding="5px 0 5px 6px"
                  size="25px"
                  margin="0 8px 0 0"
                />
                <SpanText font="12px" width="75px" color="#9b9b9b">
                  User 03
                </SpanText>
              </DropdownItem>
            </DropdownItemWrapper>
            <DropdownItemWrapper>
              <DropdownItem>
                <UserProfile
                  variant="gray"
                  padding="5px 0 5px 6px"
                  size="25px"
                  margin="0 8px 0 0"
                />
                <SpanText font="12px" width="75px" color="#9b9b9b">
                  User 04
                </SpanText>
              </DropdownItem>
            </DropdownItemWrapper>
            <DropdownItemWrapper>
              <DropdownItem borderb height='28px'>
                <SpanText font="12px" padding="10px 0" margin="10px 0 0 0">
                  Configuración
                </SpanText>
              </DropdownItem>
            </DropdownItemWrapper>
            <DropdownItemWrapper>
            <DropdownItem borderb height='28px'>
                <SpanText font="12px" padding="10px 0" margin="10px 0 0 0">
                  Ayuda
                </SpanText>
              </DropdownItem>
            </DropdownItemWrapper>
            <DropdownItemWrapper>
            <DropdownItem height='28px'>
                <SpanText font="12px" padding="10px 0" margin="10px 0 0 0" weight='bold'>
                  Log Out
                </SpanText>
              </DropdownItem>
            </DropdownItemWrapper>
          </DropdownList>
        </DropdownUpArrowWrapper>
      </DropdownWrapper>
    </UserMenuWrapper>
  );
};

export default UserMenu;

import React, {useState} from 'react';
import {
  UserMenuWrapper,
  UserMenuList,
  UserMenuItem,
  DropdownWrapper,
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
import {MENU_USER_ITEMS} from '../../../../constants';

const UserMenu = () => {
  const [showMenuUser, setShowMenuUser] = useState(false);

  const variants = {
    open: {
      height: '230px',
      transition: {
        duration: 0.5,
        when: 'beforeChildren',
        staggerChildren: 0.14,
      },
    },
    closed: {
      height: 0,
      transition: {
        duration: 0.3,
      },
    },
  };
  const variantsItemList = {
    open: {opacity: 1, x: 0},
    closed: {
      opacity: 0,
      x: -100,
      transition: {
        duration: 0.8,
      },
    },
  };

  const variantsArrow = {
    open: {
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
    closed: {opacity: 0,transition:{
      duration: .1},},
  };

  return (
    <UserMenuWrapper>
      <UserMenuList>
        <UserMenuItem>Niños</UserMenuItem>
        <UserMenuItem>
          <BellAlert />
          <FaRegBell />
        </UserMenuItem>
        <UserMenuItem
          onMouseEnter={() => setShowMenuUser(true)}
          onMouseLeave={() => setShowMenuUser(false)}>
          <UserProfile size="25px" margin="0 5px 0 0" />
          <BsChevronDown color="#fff" />
        </UserMenuItem>
        <DropdownUpArrow animate={showMenuUser ? 'open' : 'closed'} variants={variantsArrow} />
      </UserMenuList>
      <DropdownWrapper animate={showMenuUser ? 'open' : 'closed'} variants={variants}>
        <DropdownList>
          {/*        <DropdownItemWrapper variants={variantsItemList}>
            <DropdownItem activeUser>
              <UserProfile></UserProfile>
            </DropdownItem>
          </DropdownItemWrapper> */}
          {MENU_USER_ITEMS.map(
            ({
              id,
              activeUser,
              userProfile,
              variant,
              padding,
              size,
              margin,
              font,
              width,
              color,
              name,
              borderb,
              height,
              weight,
            }) => (
              <DropdownItemWrapper key={id} variants={variantsItemList}>
                <DropdownItem borderb={borderb || false} activeUser={activeUser || false}>
                  {userProfile && (
                    <UserProfile variant={variant} padding={padding} size={size} margin={margin} />
                  )}
                  <SpanText font={font} width={width} color={color} weight={weight || 'normal'}>
                    {name}
                  </SpanText>
                </DropdownItem>
              </DropdownItemWrapper>
            ),
          )}

          {/* <DropdownItemWrapper>
            <DropdownItem>
              <UserProfile variant="gray" padding="5px 0 5px 6px" size="25px" margin="0 8px 0 0" />
              <SpanText font="12px" width="75px" color="#9b9b9b">
                User 03
              </SpanText>
            </DropdownItem>
          </DropdownItemWrapper>
          <DropdownItemWrapper>
            <DropdownItem>
              <UserProfile variant="gray" padding="5px 0 5px 6px" size="25px" margin="0 8px 0 0" />
              <SpanText font="12px" width="75px" color="#9b9b9b">
                User 04
              </SpanText>
            </DropdownItem>
          </DropdownItemWrapper>
          <DropdownItemWrapper>
            <DropdownItem borderb height="28px">
              <SpanText font="12px" padding="10px 0" margin="10px 0 0 0">
                Configuración
              </SpanText>
            </DropdownItem>
          </DropdownItemWrapper>
          <DropdownItemWrapper>
            <DropdownItem borderb height="28px">
              <SpanText font="12px" padding="10px 0" margin="10px 0 0 0">
                Ayuda
              </SpanText>
            </DropdownItem>
          </DropdownItemWrapper>
          <DropdownItemWrapper>
            <DropdownItem height="28px">
              <SpanText font="12px" padding="10px 0" margin="10px 0 0 0" weight="bold">
                Log Out
              </SpanText>
            </DropdownItem>
          </DropdownItemWrapper> */}
        </DropdownList>
      </DropdownWrapper>
    </UserMenuWrapper>
  );
};

export default UserMenu;

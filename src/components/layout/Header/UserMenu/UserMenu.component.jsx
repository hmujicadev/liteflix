import React, {useState} from 'react';
import {
  UserMenuWrapper,
  UserMenuList,
  UserMenuItem,
  DropdownWrapper,
  DropdownArrowWrapper,
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
      height: '245px',
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
    closed: {
      opacity: 0,
      transition: {
        duration: 0.1,
      },
    },
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
        <DropdownArrowWrapper onMouseEnter={() => setShowMenuUser(true)}>
          <DropdownUpArrow animate={showMenuUser ? 'open' : 'closed'} variants={variantsArrow} />
        </DropdownArrowWrapper>
      </UserMenuList>
      <DropdownWrapper
        onMouseLeave={() => setShowMenuUser(false)}
        animate={showMenuUser ? 'open' : 'closed'}
        variants={variants}>
        <DropdownList>
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
        </DropdownList>
      </DropdownWrapper>
    </UserMenuWrapper>
  );
};

export default UserMenu;

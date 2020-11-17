import React, {useState} from 'react';
import {bool} from 'prop-types';
import {
  SidebarMenu,
  SidebarMenuLogoWrapper,
  SidebarMenuLogo,
  SidebarOverlay,
  StyledSidebar,
  SidebarWrapper,
  SidebarUserMenuWrapper,
  SidebarUserMenuLink,
  SidebarUserMenuProfile,
  SidebarUserMenuProfileImgWrapper,
  SidebarUserMenuProfileText,
  SidebarNavbarWrapper,
  SidebarNavbarList,
  SidebarNavbarItem,
} from './Sidebar.styles';

import Menu_URL from '../../../../assets/images/menu.png';
import Brand from '../../../global/Brand/Brand.component';
import UserProfile from '../../../global/UserProfile/UserProfile.component';

const Sidebar = ({isOpen = false}) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!open);
  return (
    <>
      <SidebarOverlay isOpen={isOpen} onClick={() => toggleOpen()} />
      <SidebarWrapper isOpen={open}>
        <StyledSidebar>
          <SidebarMenuLogoWrapper>
            <SidebarMenuLogo src={Menu_URL} />
            <Brand />
          </SidebarMenuLogoWrapper>
          <SidebarMenu>
            <SidebarUserMenuWrapper>
              <SidebarUserMenuProfile>
                <SidebarUserMenuProfileImgWrapper>
                  <UserProfile variant="pink" />
                </SidebarUserMenuProfileImgWrapper>
                <SidebarUserMenuProfileText>Ernesto Garmendia</SidebarUserMenuProfileText>
              </SidebarUserMenuProfile>
              <SidebarUserMenuLink>Cambiar Usuario</SidebarUserMenuLink>
              <SidebarUserMenuLink>Configuración</SidebarUserMenuLink>
              <SidebarUserMenuLink>Ayuda</SidebarUserMenuLink>
            </SidebarUserMenuWrapper>
          </SidebarMenu>
          <SidebarNavbarWrapper>
            <SidebarNavbarList>
              <SidebarNavbarItem>Novedades</SidebarNavbarItem>
              <SidebarNavbarItem>Series</SidebarNavbarItem>
              <SidebarNavbarItem>Películas</SidebarNavbarItem>
              <SidebarNavbarItem>Mi lista</SidebarNavbarItem>
              <SidebarNavbarItem>Niños</SidebarNavbarItem>
              <SidebarNavbarItem>AGREGAR PELICULA BUTTON</SidebarNavbarItem>

              <SidebarNavbarItem>Log Out</SidebarNavbarItem>
            </SidebarNavbarList>
          </SidebarNavbarWrapper>
        </StyledSidebar>
      </SidebarWrapper>
    </>
  );
};

Sidebar.propTypes = {
  isOpen: bool,
};

export default Sidebar;

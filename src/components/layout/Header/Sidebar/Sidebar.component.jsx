import React from 'react';
import {bool, func} from 'prop-types';
import {
  SidebarMenu,
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
import UserProfile from '../../../global/UserProfile/UserProfile.component';

const Sidebar = ({isOpen,toggleOpen }) => {

  return (
    <>
      <SidebarOverlay isOpen={isOpen} onClick={() => toggleOpen()} />
      <SidebarWrapper isOpen={isOpen}>
        <StyledSidebar>
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
  isOpen: bool.isRequired,
  toggleOpen: func.isRequired
};

export default Sidebar;

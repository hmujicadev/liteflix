import styled from 'styled-components';
import {device} from '../../../../styles/media';

export const SidebarWrapper = styled.div`
  background-color: black;
  width: 63.3%;
  height: 100vh;
  display: block;
  padding: 10px 20px 10px 15px;
  position: fixed;

  top: 0;
  left: ${({isOpen}) => (isOpen ? '0' : '-100%')};
  transition: all 300ms ease;
  @media ${device.mobileL} {
    display: none;
  }
`;
export const SidebarOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100vh;
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  opacity: ${({isOpen}) => (isOpen ? 1 : 0)};
`;
export const StyledSidebar = styled.aside``;
export const SidebarMenuLogoWrapper = styled.div`
  display: flex;
  padding: 10px 0;
`;
export const SidebarMenuLogo = styled.img`
  padding: 0 10px 0 0;
`;
export const SidebarMenu = styled.div``;
export const SidebarUserMenuWrapper = styled.ul`
  padding: 0;
  list-style: none;
  margin-bottom: 15px;
`;
export const SidebarUserMenuProfile = styled.li`
  background-color: #222222;
  height: 30px;
  margin: 12px 0;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  border-radius: 18.5px;
  display: flex;
  align-items: center;
  padding: 7px;
`;
export const SidebarUserMenuProfileImgWrapper = styled.div`
  width: 37px;
`;
export const SidebarUserMenuProfileText = styled.span`
  font-size: 12px;
  padding: 0 10px;
`;
export const SidebarUserMenuLink = styled.li`
  font-size: 12px;
  list-style: none;
  border-bottom: solid 1px #222222;
  padding: 10px 0;
`;
export const SidebarNavbarWrapper = styled.nav``;
export const SidebarNavbarList = styled.ul`
  list-style: none;
`;
export const SidebarNavbarItem = styled.li`
  list-style: none;
  font-size: 14px;
  padding: 10px 0;
  &:last-child {
    font-weight: bold;
  }
`;
export const SidebarNavbarItemIcon = styled.img``;

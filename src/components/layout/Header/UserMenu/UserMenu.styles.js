import styled from 'styled-components';
import {device} from '../../../../styles/media';

export const UserMenuWrapper = styled.div`
  display:flex;
  align-items: center;
  flex: 0 0 11%;
  position: relative;
  @media ${device.tablet}{
    display: none;
  }
  @media ${device.laptop}{
    flex: 0 0 13%;
  }
`;

export const UserMenuList = styled.ul`
  display: flex;
  flex: 0 0 100%;
  align-items: center;
  justify-content: space-between;
  align-self: right;
`;

export const UserMenuItem = styled.li`
  position:relative;
  cursor:pointer;
  display:flex;
  align-items:center;
`;

export const DropdownWrapper = styled.div`
  width: 110px;
  min-height: 160px;
  background-color: #fff;
  position: absolute;
  top: 60px;
  right: 2px;
  padding: 10px;
  border-radius:5px;
  z-index: 15;
`;

export const DropdownUpArrowWrapper = styled.div`
  position: relative;
  z-index: 10;
`;

export const DropdownUpArrow = styled.div`
  width: 16px;
  height: 0px;
  border-left: 15px solid transparent;
  border-right: 17px solid transparent;
  border-bottom: 20px solid #fff;
  border-radius: 50%;
  font-size: 0px;
  line-height: 0px;
  position: absolute;
  top: 7px;
  right: 0px;
  transform: rotate(87deg);
  z-index: 10;
`;

export const DropdownList = styled.ul`
  display: flex;
  flex-direction: column;
  color:black;
`;

export const BellAlert = styled.div`
  width: 5px;
  height: 5px;
  top: 3px;
  right: 2px;
  border-radius: 50%;
  background-color: red;
  position: absolute;
`;

export const DropdownItemWrapper = styled.div``;

export const DropdownItem = styled.li`
  min-height:${props=> props.height? props.height:'37px'};
  display:flex;
  justify-content:flex-start;
  align-items:center;
  border-radius:${props=> props.activeUser? '18.5px':'0'};
  box-shadow:${props=> props.activeUser? '0 0 10px 0 rgba(0, 0, 0, 0.1)':''};
  border-bottom:${props=> props.borderb? '.5px solid #9b9b9b':'0'};
`;



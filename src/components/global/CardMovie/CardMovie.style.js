import styled from 'styled-components';
import {device} from '../../../styles/media';

const IconWrapperStyles = {
  position: 'absolute',
  borderRadius: '50%',
  border: '0.5px #fff solid',
  width: '32px',
  height: '32px',
  color: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '20px',
  backgroundColor: 'inherit',
  '&': `hover{
      transition:all .7s ease;
      opacity:1;
      color:#000;
      background-color:#fff;}`,
};

export const CardMovieWrapper = styled.div`
  align-self:stretch;
  justify-self:stretch;
  position: relative;
  cursor: pointer;
`;

export const CardMovieImage = styled.img`
  width: 100%;
  height:100%;
`;

export const CardMovieInfoWrapper = styled.div`
  position: absolute;
  width:100%;
  max-width: 100%;
  height: 100%;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  opacity: 0;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 10%,
    rgba(0, 0, 0, 0.5502976190476191) 60%,
    rgba(0, 0, 0, 0.2855917366946778) 100%
  );
  &:hover {
    opacity: 1;
  }
`;
export const CardMovieInfoTitle = styled.h3`
  max-width:${props=> (props.large? '108px': 'auto')};  
  font-size: ${props=> (props.large? '18px': '16px')};  
  color: #fff;
  font-weight: bold;
  margin:${props=> (props.large? '0 0 0 12px': '0 0 0 10px')};
`;
export const CardMovieInfo = styled.span`
  max-width:${props=> (props.large? '108px': 'auto')};
  font-size: 12px;
  color: #fff;
  margin:${props=> (props.large? '0 0 59px 12px': '0 0 10px 10px')};
`;
export const CardMovieInfoPG = styled.span`
  width: 21px;
  font-size: 12px;
  border-radius: 20px;
  color: #fff;
  padding: 0 5px;
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
`;
export const PlayIconWrapper = styled.div`
  ${IconWrapperStyles}
  bottom: ${props=> (props.large? '133px': 'calc(50% - 20px)')};
  left: ${props=> (props.large? '12px': 'calc(50% - 20px)')};
  width: 40px;
  height: 40px;
`;
export const PlussIconWrapper = styled.div`
  ${IconWrapperStyles}
  top:10px;
  right: 52px;
  display:${props=> (props.large? 'none': '')};
`;
export const LikeIconWrapper = styled.div`
  ${IconWrapperStyles}
  top:${props=> (props.large? '': '10px')};
  bottom:${props=> (props.large? '90px': '')};
  right:10px;
  
`;
export const DownIconWrapper = styled.div`
  ${IconWrapperStyles}
  border:none;
  width:64px;
  left:calc(50% - 32px);
  bottom:${props=> (props.large? '11px': '-41px')};
  &:hover{
    background-color:inherit;
    color:#fff;
  }
  @media ${device.mobileL}{
    display:none;
  }
  
`;


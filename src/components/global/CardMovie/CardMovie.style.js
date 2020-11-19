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
  font-size: 14px;
  color: #fff;
  font-weight: bold;
`;
export const CardMovieInfo = styled.span`
  font-size: 12px;
  color: #fff;
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
  bottom:calc(50% - 20px);
  left: calc(50% - 20px);
  width: 40px;
  height: 40px;
`;
export const PlussIconWrapper = styled.div`
  ${IconWrapperStyles}
  top:10px;
  right: 10px;
`;
export const LikeIconWrapper = styled.div`
  ${IconWrapperStyles}
  top:10px;
  right: 60px;
`;

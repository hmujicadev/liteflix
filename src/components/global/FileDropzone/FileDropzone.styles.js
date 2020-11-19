import styled from 'styled-components';

const getColor = props => {
  if (props.isDragAccept) {
    return '#00e676';
  }
  if (props.isDragReject) {
    return '#ff1744';
  }
  if (props.isDragActive) {
    return '#2196f3';
  }
  return '#eeeeee';
};

export const DzWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 28px;
  border-width: 2px;
  border-radius: 10px;
  border-color: ${props => getColor(props)};
  border-style: dashed;
  background-color: #fff;
  color: #9b9b9b;
  outline: none;
  transition: border 0.24s ease-in-out;
  cursor: pointer;
`;

export const IconWrapper = styled.div`
  font-size: 32px;
  transform: rotateY(-175deg);
  color: #0076ff;
`;

export const DzTextWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  & span {
    font-weight: bold;
    color: #0076ff;
    margin-right: 5px;
  }
  & p {
    color: #9b9b9b;
  }
`;

export const DzLoaderWrapper = styled.div`
  padding: 12px 40px;
  border-radius: 10px;
  background-color: #f3f3f3;
  color: #4a4a4a;
`;

export const LoadingText = styled.p`
  font-size: 12px;
  color: #000;
`;
export const LoadingBarWrapper = styled.div`
  height: 20px;
  margin: 10px 0;
  background: #dedede;
  border-radius: 10px;
`;
export const LoadingBar = styled.div`
  height: 20px;
  background: #7ed321;
  border-radius: 10px;
  width: ${({progress}) => progress && `${progress}%`};
  transition: width 200ms ease;
`;
export const CancelButton = styled.button`
  background: none;
  border: none;
  outline: none;
  margin-left: calc(50% - 30px);
  text-transform: uppercase;
  color: #4a4a4a;
  font-size: 12px;
  font-weight: bold;
  padding: 10px;
  border-radius: 15px;
  transition: all 300ms ease;
  &:hover {
    background-color: lightgray;
  }
`;
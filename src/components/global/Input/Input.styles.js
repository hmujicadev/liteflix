import styled from 'styled-components';

export const InputWrapper = styled.div``;
export const InputForm = styled.input`
  height: 20px;
  padding: 5px 0;
  margin: 5px 0;
  border: none;
  outline: none;
  background: #fff;
  border-bottom: 1px solid;
  width: 100%;

  &:focus {
    border-bottom: 1px solid #0076ff;
  }
  &:-internal-autofill-selected {
    background-color: yellow;
  }
`;

export const SelectWrapper = styled.div`
  position: relative;
`;

export const SelectOptionsWrapper = styled.div`
  opacity: ${({show}) => (show ? 1 : 0)};
  display: ${({show}) => (show ? 'block' : 'none')};
  background: #fff;
  border-radius: 10px;
  padding: 10px 20px;
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100% - 40px);
  height: 240px;
  overflow: auto;
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.1);
  transition: opacity 300ms ease;
`;
export const SelectOptionsItem = styled.p`
  cursor: pointer;
  color: #9b9b9b;
  font-size: 16px;
  padding: 11px 8px;
  border-bottom: solid 1px #cccccc;
  &:hover {
    color: #000;
  }
`;

export const LabelForm = styled.p`
  color: #9b9b9b;
  letter-spacing: 5px;
  font-size: 12px;
  margin-bottom: 8px;
`;
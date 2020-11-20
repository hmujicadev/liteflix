import React, {useState} from 'react';
import {string, array, func, oneOf} from 'prop-types';
import {
  InputWrapper,
  LabelForm,
  InputForm,
  SelectWrapper,
  SelectOptionsWrapper,
  SelectOptionsItem,
} from './Input.styles';

const Input = React.forwardRef(({type, label, name, placeholder, options, setSelectValue}, ref) => {
  const [focusSelect, setFocusSelect] = useState(false);

  const renderInputType = () => {
    switch (type) {
      case 'input':
        return <InputForm ref={ref} name={name} placeholder={placeholder} type="text" />;
      case 'select':
        return (
          <SelectWrapper>
            <InputForm
              onFocus={() => setFocusSelect(true)}
              id={name}
              ref={ref}
              name={name}
              readOnly
              placeholder={placeholder}
              type="text"
            />
            <SelectOptionsWrapper show={focusSelect}>
              {options.map(({id, name}) => (
                <SelectOptionsItem
                  onClick={() => {
                    setFocusSelect(false);
                    setSelectValue(name);
                  }}
                  key={id}>
                  {name}
                </SelectOptionsItem>
              ))}
            </SelectOptionsWrapper>
          </SelectWrapper>
        );

      default:
        break;
    }
  };
  return (
    <InputWrapper>
      <LabelForm>{label}</LabelForm>
      {renderInputType()}
    </InputWrapper>
  );
});

Input.defaultProps = {
  type: 'input',
  placeholder: '',
};

Input.propTypes = {
  type: oneOf(['input', 'select']).isRequired,
  label: string.isRequired,
  name: string.isRequired,
  placeholder: string,
  errorMessage: string,
  options: array,
  setSelectValue: func,
};

export default Input;

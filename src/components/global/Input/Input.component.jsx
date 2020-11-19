import React, {useState,useEffect} from 'react';
import {string, array, func, oneOf} from 'prop-types';
import {
  InputWrapper,
  LabelForm,
  InputForm,
  SelectWrapper,
  SelectOptionsWrapper,
  SelectOptionsItem,
} from './Input.styles';

const Input = React.forwardRef(({type, label, name, placeholder, options, errorMessage}, ref) => {
  const [focusSelect, setFocusSelect] = useState(false);
  const [categorySelected, setcategorySelected] = useState('');
  
  useEffect(()=>{
      console.log('category',categorySelected)

  },[categorySelected])

  const renderInputType = () => {
    switch (type) {
      case 'input':
        return <InputForm ref={ref} name={name} placeholder={placeholder} type="text" />;
      case 'select':
        return (
          <SelectWrapper>
            <InputForm
              onFocus={() => setFocusSelect(true)}
              onBlur={() => setFocusSelect(false)}
              ref={ref}
              name={name}
              readOnly
              value={categorySelected}
              placeholder={placeholder}
              type="text"
            />
            <SelectOptionsWrapper show={focusSelect}>
              {options.map(({id, name}) => (
                <SelectOptionsItem onClick={(e)=>(console.log(e))} key={id}>{name}</SelectOptionsItem>
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
};

export default Input;

import React from 'react';
import PropTypes from 'prop-types';
//Components
import {TextInput} from 'react-native-paper';
import {InputContainer, LabelText} from './styled';

const Input = ({
  label,
  placeholder,
  inputStyle,
  containerStyle,
  ...restProps
}) => {
  return (
    <InputContainer style={containerStyle}>
      <LabelText>{label}</LabelText>
      <TextInput
        activeOutlineColor="transparent"
        outlineColor="transparent"
        style={inputStyle}
        placeholder={placeholder}
        selectionColor="black"
        mode="outlined"
        autoCorrect={false}
        autoCapitalize={false}
        autoComplete={false}
        {...restProps}
      />
    </InputContainer>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  inputStyle: PropTypes.object,
  containerStyle: PropTypes.object,
};

export default Input;

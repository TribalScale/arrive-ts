import React from 'react';
import PropTypes from 'prop-types';
import {TextInput} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';

import CaptionText from '../Text/Caption';

const Input = ({
  label,
  placeholder,
  inputStyle,
  containerStyle,
  ...restProps
}) => {
  return (
    <View style={styles.container}>
      <CaptionText style={styles.text}>{label}</CaptionText>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 30,
  },
  text: {
    marginBottom: 10,
  },
});

Input.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  inputStyle: PropTypes.object,
  containerStyle: PropTypes.object,
};

export default Input;

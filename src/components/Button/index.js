import React from 'react';
import PropTypes from 'prop-types';
import {Button as PaperButton} from 'react-native-paper';
import {StyleSheet} from 'react-native';

const Button = ({children, mode = 'contained', ...restProps}) => {
  return (
    <PaperButton
      style={styles.button}
      contentStyle={styles.btnInnerContainer}
      mode={mode}
      textColor="white"
      {...restProps}>
      {children}
    </PaperButton>
  );
};

const styles = StyleSheet.create({
  btnInnerContainer: {
    width: '100%',
    paddingHorizontal: 64,
    paddingVertical: 6,
  },
  button: {
    backgroundColor: '#2a7ca1',
    borderRadius: 16,
  },
});

Button.propTypes = {
  children: PropTypes.node,
};
export default Button;

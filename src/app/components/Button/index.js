import React from 'react';
import PropTypes from 'prop-types';
//components
import {StyledButton} from './styled';
import {StyleSheet} from 'react-native';

const Button = ({children, mode = 'contained', ...restProps}) => {
  return (
    <StyledButton
      contentStyle={styles.btnInnerContainer}
      mode={mode}
      textColor="white"
      {...restProps}>
      {children}
    </StyledButton>
  );
};

const styles = StyleSheet.create({
  btnInnerContainer: {
    width: '100%',
    paddingHorizontal: 64,
    paddingVertical: 6,
  },
});

Button.propTypes = {
  children: PropTypes.node,
};
export default Button;

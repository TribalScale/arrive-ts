import React from 'react';
import {StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
//Components
import {Text} from 'react-native-paper';

const BodyText = ({children, style, ...restProps}) => {
  return (
    <Text
      style={[styles.text, style]}
      variant="headlineSmall"
      accessibilityLabel="body"
      {...restProps}>
      {children}
    </Text>
  );
};

BodyText.propTypes = {
  children: PropTypes.string.isRequired,
  style: PropTypes.object,
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
  },
});

export default BodyText;

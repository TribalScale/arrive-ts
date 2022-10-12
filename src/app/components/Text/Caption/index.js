import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet} from 'react-native';
//Components
import {Text} from 'react-native-paper';

const CaptionText = ({children, style, restProps}) => {
  return (
    <Text
      style={[styles.text, style]}
      variant="titleMedium"
      accessibilityLabel="caption"
      {...restProps}>
      {children}
    </Text>
  );
};

CaptionText.propTypes = {
  children: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
  },
});

export default CaptionText;

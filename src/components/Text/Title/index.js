import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet} from 'react-native';
//Components
import {Text} from 'react-native-paper';

const TitleText = ({children, style, ...restProps}) => {
  return (
    <Text
      style={[styles.text, style]}
      variant="displaySmall"
      accessibilityLabel="title"
      {...restProps}>
      {children}
    </Text>
  );
};

TitleText.propTypes = {
  children: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
  },
});

export default TitleText;

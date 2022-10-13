import React from 'react';
import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/design';
import TitleText from '../Title';

const MainTextPage = ({children, style = {}}) => {
  return <TitleText style={[styles.text, style]}>{children}</TitleText>;
};

const styles = StyleSheet.create({
  text: {
    color: colors.BLUE,
    fontSize: 24,
    fontWeight: '500',
    lineHeight: 24,
  },
});

export default MainTextPage;

import React from 'react';
import {StyleSheet} from 'react-native';
import {BLUE} from '../../../utils/constants/Colors';
import TitleText from '../Title';

const MainTextPage = ({children}) => {
  return <TitleText style={styles.text}>{children}</TitleText>;
};

const styles = StyleSheet.create({
  text: {
    color: BLUE,
    fontSize: 24,
    fontWeight: '500',
    lineHeight: 24,
  },
});

export default MainTextPage;

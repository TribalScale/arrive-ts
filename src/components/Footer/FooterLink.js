import React from 'react';
import {StyleSheet, View} from 'react-native';
import BodyText from '../Text/Body';

const FooterLink = ({label, linkText, onPress}) => {
  return (
    <View style={styles.container}>
      <BodyText style={styles.text}>{label}</BodyText>
      <BodyText
        suppressHighlighting
        style={[styles.textLink, styles.text]}
        onPress={onPress}>
        {linkText}
      </BodyText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 16,
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginRight: 4,
  },
  textLink: {
    textDecorationLine: 'underline',
  },
});

export default FooterLink;

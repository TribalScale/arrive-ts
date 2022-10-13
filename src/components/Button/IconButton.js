import React from 'react';
import {StyleSheet} from 'react-native';
import {IconButton as PaperIconButton} from 'react-native-paper';

const IconButton = ({icon, size = 32}) => {
  return (
    <PaperIconButton
      icon={icon}
      size={size}
      iconColor="#2a7ca1"
      style={styles.icon}
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    margin: 0,
  },
});

export default IconButton;

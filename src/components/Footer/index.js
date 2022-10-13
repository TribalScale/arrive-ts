import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

import {colors} from '../../utils/design';
import ProgressBar from '../ProgressBar';

const Footer = ({enable, progress, children, nextRoute}) => {
  const {navigate} = useNavigation();
  const styleButton = {
    backgroundColor: enable ? colors.BLUE : colors.DISABLE_BUTTON,
  };
  return (
    <View>
      <ProgressBar progress={progress} />
      <View style={styles.container}>
        {children ? children : <View />}
        <TouchableOpacity
          style={[styles.button, styleButton]}
          enable={enable}
          onPress={() => navigate(nextRoute)}>
          <Icon name={'arrow-forward-outline'} size={30} color={colors.WHITE} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    marginBottom: 0,
    marginTop: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Footer;

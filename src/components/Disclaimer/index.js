import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {colors} from '../../utils/design';

const Disclaimer = ({children}) => {
  return (
    <View style={styles.container}>
      <View style={styles.document}>
        <Icon name={'information-circle'} size={25} color={colors.LIGHT_BLUE} />
        <Text style={styles.text}>{children}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.DISCLAIMER_BACKGROUND,
    padding: 20,
    width: '100%',
    borderWidth: 1,
    borderColor: colors.LIGHT_BLUE,
    borderRadius: 15,
    marginBottom: 10,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  document: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: colors.BLUE,
    marginLeft: 10,
    fontSize: 18,
    lineHeight: 20,
    width: '90%',
  },
});

export default Disclaimer;

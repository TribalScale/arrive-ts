import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const HeaderTitle = ({children}) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 10,
    marginBottom: 10,
  },
  title: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default HeaderTitle;

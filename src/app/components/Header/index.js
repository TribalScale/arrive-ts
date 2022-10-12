import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.headerText}>---</Text>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0D374D',
    height: 75,
  },
  headerText: {
    color: 'white',
    fontWeight: 'normal',
    fontSize: 22,
    padding: 7,
  },
  textContainer: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingLeft: 5,
  },
});

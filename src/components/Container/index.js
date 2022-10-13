import React from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {colors} from '../../utils/design';

const Container = ({children, style}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.box, style]}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  box: {
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: colors.BLUE,
    alignItems: 'center',
  },
  safeArea: {
    backgroundColor: colors.BLUE,
    flex: 1,
  },
});

Container.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};

export default Container;

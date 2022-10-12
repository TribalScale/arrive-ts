import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles.js';

const BlueBoxRedirect = ({text, infoPage}) => {
  return (
    <View style={styles.blueBox}>
      <View style={styles.blueBoxTextAndIcon}>
        <View style={styles.infoIcon}>
          <Text style={styles.infoIconI}>i</Text>
        </View>
        <Text style={styles.blueBoxText}>
          <Text> {text}</Text>
        </Text>
      </View>
    </View>
  );
};

export default BlueBoxRedirect;

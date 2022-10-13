import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles.js';

const BlueBoxTextInput = () => {
  const [showTextInput, setShowTextInput] = React.useState(false);
  const [text, onChangeText] = React.useState('');

  return (
    <TouchableOpacity
      style={styles.blueBox}
      onPress={() => setShowTextInput(!showTextInput)}>
      <View>
        <View style={styles.blueBoxTextAndIcon}>
          <View style={styles.infoIcon}>
            <Text style={styles.infoIconI}>i</Text>
          </View>
          <Text style={styles.blueBoxText}>
            <Text>Additional details:</Text>
          </Text>
        </View>
        {showTextInput && (
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default BlueBoxTextInput;

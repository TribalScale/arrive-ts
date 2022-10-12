import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import {CircleChoice} from './styled';

const MultipleChoice = ({multipleChoiceItems}) => {
  const [multChoiceIndex, setMultChoiceIndex] = React.useState(null);

  const renderMultipleChoice = multipleChoiceItems.map((item, index) => (
    <View style={styles.multChoiceContainer}>
      <TouchableHighlight onPress={() => setMultChoiceIndex(index)}>
        <CircleChoice active={index === multChoiceIndex} />
      </TouchableHighlight>
      <Text style={styles.multChoiceText}>{item}</Text>
    </View>
  ));

  return <View>{renderMultipleChoice}</View>;
};

export default MultipleChoice;

const styles = StyleSheet.create({
  multChoiceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
  },
  multChoiceText: {
    marginLeft: 10,
  },
});

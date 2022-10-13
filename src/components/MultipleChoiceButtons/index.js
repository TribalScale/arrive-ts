import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import {colors} from '../../utils/design';

const MultipleChoice = ({multipleChoiceItems}) => {
  const [multChoiceIndex, setMultChoiceIndex] = React.useState(null);

  const renderMultipleChoice = multipleChoiceItems.map((item, index) => {
    const circleStyle = {
      backgroundColor: item === multChoiceIndex ? colors.BLUE : 'lightgray',
      height: 25,
      width: 25,
      borderRadius: 20,
    };
    return (
      <View style={styles.multChoiceContainer}>
        <TouchableHighlight onPress={() => setMultChoiceIndex(index)}>
          <View style={circleStyle} />
        </TouchableHighlight>
        <Text style={styles.multChoiceText}>{item}</Text>
      </View>
    );
  });

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

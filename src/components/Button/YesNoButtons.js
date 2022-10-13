import React from 'react';
import {View, StyleSheet, TouchableHighlight, Text} from 'react-native';
import {colors} from '../../utils/design';

const YesNoButtons = ({width, height}) => {
  const [yesSelected, setYesSelected] = React.useState(false);
  const getHighlightStyle = selected => {
    return {
      width,
      height,
      backgroundColor: selected ? colors.BLUE : 'white',
    };
  };
  const getTextStyle = selected => {
    return {
      fontWeight: 'bold',
      color: selected ? 'white' : colors.BLUE,
    };
  };
  return (
    <View style={styles.yesNoContainer}>
      <TouchableHighlight
        style={[styles.highlight, getHighlightStyle(!yesSelected)]}
        onPress={() => setYesSelected(false)}>
        <Text style={getTextStyle(!yesSelected)}>NO</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={[styles.highlight, getHighlightStyle(yesSelected)]}
        onPress={() => setYesSelected(true)}>
        <Text style={getTextStyle(yesSelected)}>YES</Text>
      </TouchableHighlight>
    </View>
  );
};

export default YesNoButtons;

const styles = StyleSheet.create({
  yesNoContainer: {
    paddingLeft: 10,
    flexDirection: 'row',
  },
  highlight: {
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.BLUE,
  },
});

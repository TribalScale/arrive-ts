import React from 'react';
import {View, StyleSheet} from 'react-native';
import {StyledYesNoHighlight, StyledYesNoText} from './styled';

const YesNoButtons = ({width, height}) => {
  const [yesSelected, setYesSelected] = React.useState(false);

  return (
    <View style={styles.yesNoContainer}>
      <StyledYesNoHighlight
        width={width}
        height={height}
        selected={!yesSelected}
        onPress={() => setYesSelected(!yesSelected)}>
        <StyledYesNoText selected={!yesSelected}>NO</StyledYesNoText>
      </StyledYesNoHighlight>
      <StyledYesNoHighlight
        width={width}
        height={height}
        selected={yesSelected}
        onPress={() => setYesSelected(!yesSelected)}>
        <StyledYesNoText selected={yesSelected}>YES</StyledYesNoText>
      </StyledYesNoHighlight>
    </View>
  );
};

export default YesNoButtons;

const styles = StyleSheet.create({
  yesNoContainer: {
    paddingLeft: 10,
    flexDirection: 'row',
  },
});

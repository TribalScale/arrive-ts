import React from 'react';
import {ProgressBar as PaperProgressBar} from 'react-native-paper';
import {colors} from '../../utils/design';

const ProgressBar = ({progress = 0, style = {}}) => {
  return (
    <PaperProgressBar style={style} progress={progress} color={colors.BLUE} />
  );
};

export default ProgressBar;

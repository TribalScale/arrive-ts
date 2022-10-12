import React from 'react';
//components
import {ProgressBar as PaperProgressBar} from 'react-native-paper';
import styled from '@emotion/native';
import {BLUE} from '../../utils/constants/Colors';

const StyledProgressBar = styled(PaperProgressBar)``;
const ProgressBar = ({progress = 0}) => {
  return <StyledProgressBar progress={progress} color={BLUE} />;
};

export default ProgressBar;

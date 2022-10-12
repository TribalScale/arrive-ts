import styled from '@emotion/native';
import {Button as PaperButton} from 'react-native-paper';

export const StyledButton = styled(PaperButton)`
  background-color: #2a7ca1;
  border-radius: 16px;
`;

export const StyledYesNoHighlight = styled.TouchableHighlight`
  background-color: ${({selected, width, height}) => `
    background-color: ${selected ? '#0D374D' : 'white'};
    width: ${width};
    height: ${height};
  `};
  border-width: 1;
  border-radius: 10;
  align-items: center;
  justify-content: center;
  border-color: #0d374d;
`;

export const StyledYesNoText = styled.Text`
  color: ${({selected}) => (selected ? 'white' : '#0D374D')};
  font-weight: bold;
`;

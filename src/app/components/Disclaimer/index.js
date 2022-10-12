import React from 'react';
import styled from '@emotion/native';
import {
  BLUE,
  DISCLAIMER_BACKGROUND,
  LIGHT_BLUE,
} from '../../utils/constants/Colors';
import Icon from 'react-native-vector-icons/Ionicons';

const StyledDisclaimer = styled.View({
  backgroundColor: DISCLAIMER_BACKGROUND,
  padding: 20,
  width: '100%',
  borderWidth: 1,
  borderColor: LIGHT_BLUE,
  borderRadius: 15,
  marginBottom: 20,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const ScanDocumentView = styled.View({
  flexDirection: 'row',
  alignItems: 'center',
});

const DisclaimerText = styled.Text`
  color: ${BLUE};
  margin-left: 10;
  font-size: 18;
  line-height: 20;
  width: 90%;
`;

const Disclaimer = ({children}) => {
  return (
    <StyledDisclaimer>
      <ScanDocumentView>
        <Icon name={'information-circle'} size={25} color={LIGHT_BLUE} />
        <DisclaimerText>{children}</DisclaimerText>
      </ScanDocumentView>
    </StyledDisclaimer>
  );
};

export default Disclaimer;

import styled from '@emotion/native';
import {useNavigation} from '@react-navigation/native';

import React from 'react';

import Icon from 'react-native-vector-icons/Ionicons';
import ProgressBar from '../ProgressBar';
import {BLUE, DISABLE_BUTTON, WHITE} from '../../utils/constants/Colors';
import {View} from 'react-native';

const FooterContainer = styled.View({
  height: 80,
  backgroundColor: 'white',
  paddingHorizontal: 20,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const NextButton = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  background-color: ${({enable}) => (enable ? BLUE : DISABLE_BUTTON)};
`;

const Footer = ({enable, progress, children, nextRoute}) => {
  const {navigate} = useNavigation();
  return (
    <>
      <ProgressBar progress={progress} />
      <FooterContainer>
        {children ? children : <View />}
        <NextButton enable={enable} onPress={() => navigate(nextRoute)}>
          <Icon name={'arrow-forward-outline'} size={30} color={WHITE} />
        </NextButton>
      </FooterContainer>
    </>
  );
};
export default Footer;

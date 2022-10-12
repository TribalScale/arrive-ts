import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native';
import {WHITE} from '../../utils/constants/Colors';
import {useNavigation} from '@react-navigation/native';

const BackButton = () => {
  const {canGoBack, goBack} = useNavigation();

  const handleGoBack = () => {
    if (canGoBack()) {
      goBack();
    }
  };
  return (
    <TouchableOpacity onPress={handleGoBack}>
      <Icon name={'arrow-back-outline'} size={30} color={WHITE} />
    </TouchableOpacity>
  );
};
export default BackButton;

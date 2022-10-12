import React from 'react';
import styled from '@emotion/native';
import {Linking} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import {useNavigation} from '@react-navigation/native';

const LinkBase = styled.Text`
  font-size: 16px;
  color: rgba(32, 52, 73, 1);
  text-decoration: underline;
  font-weight: 400;
`;

const Link = ({
  href = '',
  params = {},
  title = '',
  external = false,
  onPress = null,
  ...rest
}) => {
  const navigation = useNavigation();

  function openURL() {
    if (Linking.canOpenURL(href)) {
      Linking.openURL(href);
    }
  }

  function navigateInternally() {
    navigation.navigate(href, params);
  }

  const handlePress = () => (external ? openURL() : navigateInternally());

  return (
    <LinkBase onPress={handlePress} {...rest}>
      {title}
      {external && <Icon name="external-link" size={18} />}
    </LinkBase>
  );
};

export default Link;

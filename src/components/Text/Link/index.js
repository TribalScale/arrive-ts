import React from 'react';
import {Linking, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import {useNavigation} from '@react-navigation/native';

const Link = ({
  href = '',
  params = {},
  title = '',
  external = false,
  onPress = null,
  style = {},
  ...rest
}) => {
  const navigation = useNavigation();

  const navigateInternally = () => navigation.navigate(href, params);
  const openURL = () => {
    if (Linking.canOpenURL(href)) {
      Linking.openURL(href);
    }
  };
  const handlePress = () => (external ? openURL() : navigateInternally());

  return (
    <Text style={[style, styles.link]} onPress={handlePress} {...rest}>
      {title}
      {external && <Icon name="external-link" size={18} />}
    </Text>
  );
};

const styles = StyleSheet.create({
  link: {
    fontSize: 16,
    color: 'rgba(32, 52, 73, 1)',
    textDecorationLine: 'underline',
    fontWeight: '400',
  },
});

export default Link;

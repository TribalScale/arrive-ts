import React, {useContext, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Divider, Switch} from 'react-native-paper';

import {AuthContext} from '../../../context/AuthContext';

import Container from '../../../components/Container';
import {Link} from '../../../components/Text';

const SettingsButton = ({onPress = () => {}, title = '', ...rest}) => {
  return (
    <TouchableOpacity onPress={onPress} {...rest}>
      <Text style={[styles.infoText, styles.label]}>{title}</Text>
    </TouchableOpacity>
  );
};

const Section = ({
  children,
  title = '',
  onPress = null,
  action = null,
  showDivider = false,
}) => {
  return (
    <>
      <View style={styles.sectionContainer}>
        <View style={styles.infoContainer}>
          <SettingsButton title={title} onPress={onPress} disabled={!onPress} />
          {children}
        </View>
        <View style={styles.actionContainer}>{action}</View>
      </View>
      {showDivider && <Divider bold style={styles.divider} />}
    </>
  );
};

const Settings = () => {
  const [saveTravellers, setSaveTravellers] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [_, dispatch] = useContext(AuthContext);

  const handleSwitchToggle = () => {
    setSaveTravellers(prev => !prev);
  };
  const onSignOut = () => dispatch({type: 'user_logout', payload: false});
  const travellerSwitch = (
    <Switch
      value={saveTravellers}
      onValueChange={handleSwitchToggle}
      trackColor={{
        true: 'rgba(32, 52, 73, 1)',
      }}
    />
  );

  return (
    <Container style={styles.container}>
      <Section title="Saved travellers" showDivider action={travellerSwitch}>
        <Text style={styles.infoText}>
          Save my travel document for future trips (optional)
        </Text>
        <Link
          title="Privacy Notice - Saved traveller"
          href="TermsPage"
          style={styles.link}
        />
      </Section>
      <Section
        title="Delete Account"
        onPress={() => console.log('Delete account')}
        showDivider
      />
      <Section title="Sign out" onPress={onSignOut} />
      <Text style={styles.footerText}>v1.0.0 TribalScale</Text>
    </Container>
  );
};

const styles = StyleSheet.create({
  actionContainer: {
    width: '30%',
    minHeight: 17,
    alignItems: 'flex-end',
  },
  container: {
    backgroundColor: 'white',
    paddingTop: 20,
  },
  divider: {
    marginTop: 5,
    marginBottom: 5,
    width: '90%',
    alignSelf: 'center',
  },
  infoContainer: {
    width: '70%',
  },
  infoText: {
    fontWeight: '300',
    marginTop: 10,
    marginBottom: 10,
  },
  label: {color: 'rgba(32, 52, 73, 1)', fontWeight: '500'},
  footerText: {
    fontWeight: '300',
    fontSize: 12,
  },
  sectionContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 3,
    minHeight: 60,
  },
  link: {
    fontSize: 14,
  },
});

export default Settings;

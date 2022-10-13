import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import {Divider} from 'react-native-paper';
import Link from '../../../components/Text/Link';
import {informationLinks, legalLinks, travelPreparation} from './data';

const Resources = () => {
  const composeResourceLink = item => (
    <Link title={item.title} href={item.url} style={styles.link} external />
  );

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Information Links</Text>
      {informationLinks.map(composeResourceLink)}
      <Text style={styles.sectionTitle}>Travel preparation</Text>
      {travelPreparation.map(composeResourceLink)}
      <Divider style={styles.divider} />
      <Text style={styles.sectionTitle}>Legal</Text>
      {legalLinks.map(composeResourceLink)}
      <Divider style={styles.divider} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 20,
    paddingLeft: 20,
  },
  divider: {
    marginBottom: 20,
    marginTop: 20,
  },
  link: {
    marginBottom: 10,
    marginTop: 10,
    maxWidth: '80%',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '300',
    marginTop: 20,
    marginRight: 0,
    marginBottom: 10,
    marginLeft: 0,
  },
  title: {
    fontSize: 22,
    marginBottom: 10,
    fontWeight: '400',
  },
});

export default Resources;

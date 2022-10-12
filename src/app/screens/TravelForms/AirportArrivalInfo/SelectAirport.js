/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {Searchbar} from 'react-native-paper';
import styles from '../styles';
const AIRPORTS = [
  'Montreal - Trudeau International Airport (YUL)',
  'Toronto Pearson International Airport - Terminal 1 (YYZ)',
  'Toronto Pearson International Airport - Terminal 3 (YYZ)',
  'Vancouver International Airport (YVR)',
];

const SelectAirport = ({navigation}) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  const renderAirports = AIRPORTS.map(item => {
    <View style={styles.airportOptions}>
      <Text style={{margin: 15}}>{item}</Text>
    </View>;
  });

  return (
    <SafeAreaView>
      <Text style={styles.cancel} onPress={() => navigation.goBack()}>
        Cancel
      </Text>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Airports</Text>
        <Searchbar
          style={styles.searchBar}
          placeholder={'Search'}
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <View style={styles.subtitleBar}>
        <Text style={styles.subtitle}>Recent</Text>
      </View>
      <View>{renderAirports}</View>

      <View style={styles.subtitleBar}>
        <Text style={styles.subtitle}>All</Text>
      </View>
      <View>{renderAirports}</View>
    </SafeAreaView>
  );
};

export default SelectAirport;

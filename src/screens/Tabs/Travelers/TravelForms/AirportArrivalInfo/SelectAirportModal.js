/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';
import {Searchbar} from 'react-native-paper';
import {colors} from '../../../../../utils/design';
import styles from '../styles';
const AIRPORTS = [
  'Montreal - Trudeau International Airport (YUL)',
  'Toronto Pearson International Airport - Terminal 1 (YYZ)',
  'Toronto Pearson International Airport - Terminal 3 (YYZ)',
  'Vancouver International Airport (YVR)',
];

const SelectAirport = ({isVisible, onClose, setAirport}) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  const airportOptions = AIRPORTS.filter(airport => {
    if (searchQuery) {
      return airport
        .toLocaleLowerCase()
        .includes(searchQuery.toLocaleLowerCase());
    }
    return true;
  }).map(airport => {
    return (
      <TouchableOpacity
        style={styles.airportOptions}
        key={airport}
        onPress={() => {
          setAirport(airport);
          onClose();
        }}>
        <Text style={{margin: 15}}>{airport}</Text>
      </TouchableOpacity>
    );
  });

  return (
    <Modal
      onSwipeComplete={onClose}
      isVisible={isVisible}
      swipeDirection={['down']}
      style={{
        justifyContent: 'flex-start',
        margin: 0,
        backgroundColor: colors.WHITE,
        marginTop: 100,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
      }}>
      <TouchableOpacity onPress={onClose}>
        <Text style={styles.cancel}>Cancel</Text>
      </TouchableOpacity>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Airports</Text>
        <Searchbar
          style={styles.searchBar}
          placeholder={'Search'}
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <ScrollView>
        <View style={styles.subtitleBar}>
          <Text style={styles.subtitle}>Recent</Text>
        </View>
        <View>{airportOptions}</View>
        <View style={styles.subtitleBar}>
          <Text style={styles.subtitle}>All</Text>
        </View>
        <View>{airportOptions}</View>
      </ScrollView>
    </Modal>
  );
};

export default SelectAirport;

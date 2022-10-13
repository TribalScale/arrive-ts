import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  infoIcon: {
    backgroundColor: '#4f97b6',
    borderRadius: 20,
    height: 25,
    width: 25,
    marginTop: 5,
    paddingLeft: 10,
    paddingTop: 5,
  },
  infoIconI: {
    color: 'white',
    fontWeight: 'bold',
  },
  blueBox: {
    flexDirection: 'row',
    backgroundColor: '#d8eef3',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#1e778a',
    paddingTop: 20,
    marginTop: 15,
    marginBottom: 15,
    minHeight: 75,
  },
  blueBoxText: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    paddingLeft: 10,
  },
  blueBoxTextAndIcon: {
    width: 300,
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    paddingLeft: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    marginTop: 45,
    marginLeft: 20,
  },
});

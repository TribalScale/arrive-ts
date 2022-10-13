import {StyleSheet} from 'react-native';
import {colors} from '../../../../utils/design';

export default StyleSheet.create({
  header: {
    fontSize: 25,
    paddingVertical: 20,
  },
  formContainer: {
    flex: 1,
  },
  asterisk: {
    fontWeight: 'bold',
    color: colors.DARK_RED,
  },
  boldPrompt: {
    fontWeight: 'bold',
    fontSize: 17,
    marginTop: 15,
  },
  indicatesRequired: {
    fontStyle: 'italic',
    fontSize: 17,
  },
  row: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
  },
  blueBox: {
    flexDirection: 'row',
    backgroundColor: '#d8eef3',
    height: 75,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#1e778a',
  },
  blueBoxText: {
    flexDirection: 'row',
    height: 75,
    flexWrap: 'wrap',
    flex: 1,
  },
  blueBoxTextAndIcon: {
    width: 300,
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
  },
  bold: {
    fontWeight: 'bold',
  },
  infoIcon: {
    backgroundColor: '#4f97b6',
    borderRadius: 20,
    height: 25,
    width: 25,
  },
  infoIconI: {
    color: 'white',
    fontWeight: 'bold',
  },
  paragraph: {
    fontSize: 17,
  },
  box: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 12,
    marginTop: 15,
    minHeight: 54,
    flexDirection: 'row',
  },
  headerContainer: {
    padding: 20,
    paddingTop: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchBar: {
    backgroundColor: 'lightgray',
    height: 35,
  },
  subtitleBar: {
    backgroundColor: 'lightgray',
    height: 35,
    justifyContent: 'center',
  },
  subtitle: {
    color: 'gray',
    paddingLeft: 20,
    fontWeight: 'bold',
  },
  airportOptions: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    marginLeft: 20,
    marginRight: 20,
  },
  cancel: {
    color: colors.BLUE,
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'right',
    paddingTop: 20,
    paddingRight: 20,
  },
  done: {
    color: colors.BLUE,
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'right',
    paddingTop: 20,
    alignText: 'right',
    width: 280,
  },
  travellerBox: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 12,
  },
  checkbox: {
    borderWidth: 1,
  },
  editBtn: {
    paddingLeft: 60,
    paddingTop: 5,
  },
  editBtnContainer: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  addBtnText: {
    fontSize: 16,
  },
  input: {
    height: 40,
    borderWidth: 1,
  },
  text: {
    fontSize: 20,
    marginTop: 20,
  },
  subheader: {
    paddingTop: 20,
  },
});

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    marginLeft: 20,
  },
  header: {
    fontSize: 25,
    marginTop: 10,
  },
  formContainer: {
    margin: 20,
  },
  asterisk: {
    fontWeight: 'bold',
    color: '#890c0c',
    fontSize: 17,
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
    paddingTop: 20,
  },
  blueBoxText: {
    flexDirection: 'row',
    height: 75,
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
  bold: {
    fontWeight: 'bold',
  },
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
  paragraph: {
    fontSize: 17,
    marginTop: 20,
    //marginBottom: 20,
  },
  box: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 12,
    flexDirection: 'row',
  },
  headerContainer: {
    padding: 20,
    paddingTop: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingBottom: 10,
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
    color: '#0D374D',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'right',
    paddingTop: 20,
    paddingRight: 20,
  },
  done: {
    color: '#0D374D',
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
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

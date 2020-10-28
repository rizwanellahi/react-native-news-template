import {StyleSheet, Dimensions} from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
  sub_card: {
    marginHorizontal: 10,
    paddingTop: 10,
  },
  sc_wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 100,
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 3,
  },
  sc_img_wrapper: {
    flex: 1,
    width: '28%',
  },
  sc_img: {
    flex: 1,
    // width: '100%',
    // zIndex: 999999
  },
  sc_text_wrapper: {
    width: '72%',
    padding: 12,
    // flex: 1,
    // flexWrap: 'wrap',
    // backgroundColor: 'blue',
  },
  sc_name: {
    color: 'gray',
    fontSize: 11,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  sc_title: {
    color: '#121212',
  },
  date: {
    color: 'gray',
    fontSize: 12,
  },
  sc_bottom: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    // alignContent: 'center',
    // backgroundColor: 'red',
  },
});

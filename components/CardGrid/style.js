import {StyleSheet, Dimensions} from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
  grid: {
    width: WINDOW_WIDTH / 2,
    padding: 5,
    marginBottom: 15,
    // backgroundColor: 'blue',
  },
  gridContent: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    height: 130,
    borderRadius: 10,
  },
  textWrapper: {
    padding: 5,
  },
  name: {
    color: 'gray',
    fontSize: 12,
  },
  title: {},
});

import {StyleSheet, Dimensions} from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#121212',
    backgroundColor: '#E5E5E5',
    // marginBottom: 80,
  },
  content: {
    paddingBottom: 60,
  },
  Image: {
    width: 100,
    height: 100,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

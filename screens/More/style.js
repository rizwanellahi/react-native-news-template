import {StyleSheet, Dimensions} from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

const box_width = WINDOW_WIDTH / 2;

export default StyleSheet.create({
  moreWrapper: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    // backgroundColor: 'red',
  },
  grid: {
    width: box_width,
    padding: 5,
    // borderRadius: 10,
  },
  gridContent: {
    height: box_width,
    borderRadius: 10,
    backgroundColor: 'blue',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  innContent: {
    borderRadius: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    paddingBottom: 60,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

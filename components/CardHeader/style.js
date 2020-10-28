import {StyleSheet, Dimensions} from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
  image: {
    overflow: 'hidden',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  header_post: {
    height: WINDOW_HEIGHT / 2,
    overflow: 'hidden',
  },
  header_container: {
    marginHorizontal: 15,
    marginBottom: 15,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    overflow: 'hidden',
    // borderBottomLeftRadius: 10,
    // borderBottomRightRadius: 10,
  },
  name: {
    fontWeight: 'bold',
    color: '#121212',
    paddingVertical: 2,
    paddingHorizontal: 5,
    backgroundColor: 'white',
    alignSelf: 'flex-start',
  },
  title: {
    color: 'white',
    fontSize: 24,
  },
  date: {
    color: 'white',
    fontSize: 12,
    marginTop: 4,
  },
});

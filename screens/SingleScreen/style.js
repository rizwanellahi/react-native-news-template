import {StyleSheet, Dimensions, Platform} from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    ...Platform.select({
      ios: {
        height: WINDOW_HEIGHT / 2.5,
      },
      android: {
        height: WINDOW_HEIGHT / 2.5,
      },
    }),
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  contents: {
    flex: 1,
    padding: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: 'white',
    marginTop: -15,
  },
  name: {color: 'gray', fontWeight: 'bold'},
  date: {fontWeight: '100'},
  title: {
    fontSize: 20,
    marginVertical: 10,
    color: '#121212',
  },
  description: {
    fontSize: 15,
    color: '#121212',
  },
  icon: {
    color: '#e2e2e2',
    elevation: 5,
  },
  goBack: {
    position: 'absolute',
    // top: Platform.OS === 'ios' ? 40 : 15,
    left: 15,
    zIndex: 1,
    borderRadius: 100,
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        opacity: 0,
        height: 0,
      },
      android: {
        top: 20,
      },
    }),
  },
  rm_container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 15,
    paddingBottom: 80,
  },
  rm_wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#121212',
    borderRadius: 10,
  },
  rm_text: {
    color: 'white',
    fontSize: 15,
  },
  rm_icon: {
    // width: 100,
    fontSize: 20,
    color: 'white',
    paddingLeft: 10,
  },
});

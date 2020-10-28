import React, {useState} from 'react';
import {View, Image, StyleSheet} from 'react-native';

const ImageProgress = (props) => {
  const [isLoading, setLoading] = useState(true);

  const LoadingView = () => {
    return (
      <View style={styles.spinnerWrapper}>
        <Image
          style={styles.spinner}
          source={require('./../../components/ImageProgress/712.gif')}
        />
      </View>
    );
  };

  return (
    <>
      <Image
        {...props}
        onLoadStart={() => {
          isLoading;
        }}
        onLoadEnd={() => {
          setLoading(false);
        }}
        resizeMode="cover"
      />
      {isLoading && <LoadingView />}
    </>
  );
};

const styles = StyleSheet.create({
  spinnerWrapper: {
    position: 'absolute',
    top: '35%',
    left: '35%',
  },
  spinner: {
    width: 30,
    height: 30,
  },
});

export default ImageProgress;

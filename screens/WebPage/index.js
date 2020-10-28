import React from 'react';
import {WebView} from 'react-native-webview';

const WebPage = ({route, navigation}) => {
  const {webUrl} = route.params;
  return <WebView source={{uri: webUrl}} />;
};

export default WebPage;

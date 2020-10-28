import React from 'react';
import {View, ScrollView, StatusBar, Text} from 'react-native';
import style from './style';
import Headlines from './components/headlines.js';
import General from './components/general.js';
import Entertainment from './components/entertainment.js';
import {key} from './../../Api/key.js';

export default function Home({navigation}) {
  return (
    <>
      {key.length === 0 || key === 'YOUR-KEY' ? (
        <View
          style={{
            marginTop: 80,
            alignItems: 'center',
          }}>
          <Text>Please insert your News API Key</Text>
          <Text>Api/key.js</Text>
        </View>
      ) : (
        <ScrollView style={style.container}>
          <StatusBar barStyle="dark-content" />
          <View style={style.content}>
            <Headlines />
            <General />
            <Entertainment />
          </View>
        </ScrollView>
      )}
    </>
  );
}

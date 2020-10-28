import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Platform,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import style from './style';

const SingleScreen = ({route, navigation}) => {
  const {PassData} = route.params;

  const ReadMore = () => {
    return (
      <TouchableOpacity
        style={style.rm_container}
        onPress={() => navigation.navigate('WebPage', {webUrl: PassData.url})}>
        <View style={style.rm_wrapper}>
          <Text style={style.rm_text}>Continue reading</Text>
          <Ionicons style={style.rm_icon} name="arrow-forward-outline" />
        </View>
      </TouchableOpacity>
    );
  };

  const GoBack = () => {
    return (
      <SafeAreaView style={style.goBack}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons style={style.icon} size={20} name={'arrow-back-outline'} />
        </TouchableOpacity>
      </SafeAreaView>
    );
  };

  return (
    <ScrollView style={style.container}>
      <StatusBar barStyle="light-content" />
      <GoBack />

      <Image source={{uri: PassData.urlToImage}} style={style.image} />
      <View style={style.contents}>
        <Text style={style.name}>
          {PassData.source.name}
          {' - '}
          <Text style={style.date}>{moment(PassData.date).format('lll')}</Text>
        </Text>

        <Text style={style.title}>{PassData.title}</Text>
        <Text style={style.description}>{PassData.description}</Text>
      </View>
      <ReadMore />
    </ScrollView>
  );
};

export default SingleScreen;

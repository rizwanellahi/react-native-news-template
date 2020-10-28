import React from 'react';
import {
  Text,
  ScrollView,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import style from './style';

const ScreenList = [
  {
    title: 'Entertainment',
    screen: 'Entertainment',
    image:
      'https://cdn.pixabay.com/photo/2016/01/19/18/02/concerts-1150042_960_720.jpg',
  },
  {
    title: 'Health',
    screen: 'Health',
    image:
      'https://cdn.pixabay.com/photo/2018/09/23/09/31/smoothie-3697014_960_720.jpg',
  },
  {
    title: 'TechCrunch ',
    screen: 'TechCrunch',
    image:
      'https://techcrunch.com/wp-content/themes/techcrunch-2017/images/opengraph-default.png',
  },
  {
    title: 'Bitcoin ',
    screen: 'Bitcoin',
    image:
      'https://cdn.pixabay.com/photo/2017/10/19/18/23/bitcoin-2868703_960_720.jpg',
  },
  {
    title: 'General',
    screen: 'General',
    image:
      'https://cdn.pixabay.com/photo/2017/06/28/17/03/ball-2451384_960_720.jpg',
  },
];
const More = ({navigation}) => {
  return (
    <ScrollView>
      <View style={style.moreWrapper}>
        {ScreenList.map((item, i) => (
          <TouchableOpacity key={i} onPress={() => navigation.navigate(item.screen)}>
            <View style={style.grid}>
              <View style={style.gridContent}>
                <ImageBackground style={style.image} source={{uri: item.image}}>
                  <View style={style.innContent}>
                    <Text style={style.title}>{item.title}</Text>
                  </View>
                </ImageBackground>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default More;

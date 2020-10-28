import React from 'react';
import {View, Text, Image} from 'react-native';
import style from './style';

const CardGrid = (props) => {
  return (
    <View style={style.grid}>
      <View style={style.gridContent}>
        <Image
          source={{uri: props.image}}
          style={style.image}
          resizeMode="cover"
        />
        <View style={style.textWrapper}>
          <Text style={style.name}>#{props.name}</Text>
          <Text numberOfLines={2} style={style.title}>{props.title}</Text>
        </View>
      </View>
    </View>
  );
};

export default CardGrid;

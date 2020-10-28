import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';
import style from './style';

const CardHeader = (props) => {
  return (
    <ImageBackground source={{uri: props.image}} style={style.image}>
      <LinearGradient
      colors={['rgba(255,255,255,0.0942752100840336)', 'rgba(0,0,0,0.8945553221288515)']}
      style={style.linearGradient}>
        <View style={style.header_post}>
          <View style={style.header_container}>
            <Text style={style.name}>{props.name}</Text>
            <Text style={style.date}>{moment(props.date).format('lll')}</Text>
            <Text style={style.title}>{props.title}</Text>
          </View>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

export default CardHeader;

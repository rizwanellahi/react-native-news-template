import React from 'react';
import {Text, View} from 'react-native';
import moment from 'moment';
import style from './style';
import ImageProgress from './../ImageProgress';

const CardList = (props) => {
  return (
    <View style={style.sub_card}>
      <View style={style.sc_wrapper}>
        <View style={style.sc_img_wrapper}>
          <ImageProgress source={{ uri: props.imgUrl }} style={style.sc_img} />
        </View>
        <View style={style.sc_text_wrapper}>
          <Text style={style.sc_title} numberOfLines={5}>
            {props.title}
          </Text>
          <View style={style.sc_bottom}>
            <Text style={style.sc_name}>{props.name} - </Text>
            <Text style={style.date}>{moment(props.date).format('lll')}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardList;

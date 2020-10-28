import React, {useEffect, useState} from 'react';
import {
  View,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {sports} from '../../Api/api.js';
import CardList from './../../components/CardList';
import style from './style';

const Sports = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(sports)
      .then((response) => response.json())
      .then((json) => setData(json.articles))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={style.container}>
      {isLoading ? (
        <View style={style.loader}>
          <ActivityIndicator color="#000" />
        </View>
      ) : (
        <View style={style.content}>
          <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() =>
                  props.navigation.navigate('SingleScreen', {
                    PassData: item,
                  })
                }>
                <CardList
                  imgUrl={item.urlToImage}
                  name={item.source.name}
                  title={item.title}
                  date={item.publishedAt}
                />
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default Sports;

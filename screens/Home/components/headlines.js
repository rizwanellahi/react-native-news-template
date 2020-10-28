import React, {useEffect, useState} from 'react';
import {
  View,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CardList from './../../../components/CardList';
import CardHeader from './../../../components/CardHeader';
import {headlines} from '../../../Api/api.js';

const Headlines = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [HeaderBanner, setHeaderBanner] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    const url = headlines;
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json.articles) || setHeaderBanner(json.articles))
      .finally(() => setLoading(false));
  }, []);

  const CardHeader_ = () => {
    const _headerBanner = HeaderBanner.filter((el, index) => {
      return index === 0;
    });
    return (
      <View>
        {_headerBanner.map((e) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('SingleScreen', {
                PassData: e,
              })
            }>
            <CardHeader
              source={e.urlToImage}
              image={e.urlToImage}
              name={e.source.name}
              title={e.title}
            />
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const listData = data.filter((el, index) => {
    return index > 0;
  });

  const ListData_ = (item, index) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('SingleScreen', {
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
    );
  };

  return (
    <View style={style.content}>
      <FlatList
        data={listData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => ListData_(item, index)}
        ListHeaderComponent={CardHeader_()}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  Image: {
    width: 100,
    height: 100,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Headlines;

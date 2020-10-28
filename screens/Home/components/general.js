import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CardGrid from '../../../components/CardGrid';
import {generalAPI} from '../../../Api/api.js';

const General = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    const url = generalAPI;
    console.log('gen Data', generalAPI);
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json.articles))
      .finally(() => setLoading(false));
  }, []);

  const FilterData = data.filter((el, i) => {
    return i <= 7;
  });

  const GeneralData = (item, index) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('SingleScreen', {
            PassData: item,
          })
        }>
        <CardGrid
          heading="General"
          name={item.source.name}
          title={item.title}
          image={item.urlToImage}
        />
      </TouchableOpacity>
    );
  };
  return (
    <View style={style.wrapper}>
      <View style={style.headingWrap}>
        <Text style={style.heading}>General</Text>
      </View>
      <FlatList
        data={FilterData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => GeneralData(item, index)}
        numColumns={2}
      />
    </View>
  );
};

const style = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 20,
  },
  headingWrap: {
    marginTop: 5,
    padding: 10,
  },
  heading: {
    fontSize: 27,
    fontWeight: 'bold',
  },
});

export default General;

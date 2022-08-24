import {View, Text, Image, FlatList} from 'react-native';
import React from 'react';

import restaurants from '../../../assets/data/restaurants.json';
import * as Icons from 'react-native-heroicons/solid';
import DishListItem from '../../components/DishListItem';
import Header from './Header';
import {useRoute, useNavigation} from '@react-navigation/native';

const restaurant = restaurants[0];

const RestaurantDetailsPage = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const id = route.params?.id;

  return (
    <View style={{flex: 1}}>
      <FlatList
        ListHeaderComponent={Header}
        data={restaurant.dishes}
        renderItem={({item}) => <DishListItem dish={item} />}
        keyExtractor={item => item.name}
      />

      <View
        style={{
          backgroundColor: 'white',
          padding: 5,
          position: 'absolute',
          top: 20,
          left: 10,
          borderRadius: 50,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icons.ChevronLeftIcon
          onPress={() => navigation.goBack()}
          size={25}
          color="#000"
        />
      </View>
    </View>
  );
};

export default RestaurantDetailsPage;

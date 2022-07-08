import {View, Text, Image, FlatList} from 'react-native';
import React from 'react';

import restaurants from '../../../assets/data/restaurants.json';
import * as Icons from 'react-native-heroicons/solid';
import DishListItem from '../../components/DishListItem';
import Header from './Header';

const restaurant = restaurants[0];

const RestaurantDetailsPage = () => {
  return (
    <View style={{flex: 1}}>
      <FlatList
        ListHeaderComponent={Header}
        data={restaurant.dishes}
        renderItem={({item}) => <DishListItem dish={item} />}
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
        <Icons.ChevronLeftIcon size={25} color="#000" />
      </View>
    </View>
  );
};

export default RestaurantDetailsPage;

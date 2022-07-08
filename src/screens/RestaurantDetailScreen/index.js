import {View, Text, Image} from 'react-native';
import React from 'react';

import restaurants from '../../../assets/data/restaurants.json';
import * as Icons from 'react-native-heroicons/solid';
import DishListItem from '../../components/DishListItem';

const restaurant = restaurants[0];

const RestaurantDetailsPage = () => {
  return (
    <View style={{flex: 1}}>
      <Image
        source={{uri: restaurant.image}}
        style={{width: '100%', aspectRatio: 5 / 3}}
      />
      <View
        style={{
          backgroundColor: 'white',
          padding: 5,
          position: 'absolute',
          top: 20,
          left: 10,
          borderRadius: 50,
        }}>
        <Icons.ChevronLeftIcon size={25} color="#000" />
      </View>
      <View style={{padding: 5}}>
        <Text
          style={{
            fontSize: 35,
            fontWeight: 'bold',
            color: '#000',
            marginVertical: 5,
          }}>
          {restaurant.name}
        </Text>
        <Text style={{color: 'gray', fontSize: 15}}>
          $ {restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}-
          {restaurant.maxDeliveryTime} minutes
        </Text>
      </View>
      <DishListItem />
    </View>
  );
};

export default RestaurantDetailsPage;

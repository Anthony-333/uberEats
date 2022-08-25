import {View, Text, Image, FlatList} from 'react-native';
import React from 'react';

import * as Icons from 'react-native-heroicons/solid';
import DishListItem from '../../components/DishListItem';

const DEFAULT_IMAGE =
  'https://res.cloudinary.com/dzhvw7vxn/image/upload/v1661407376/UberEats/noimage_xzk1qy.jpg';

const Header = ({restaurant}) => {
  return (
    <View style={{flex: 1}}>
      <Image
        source={{ uri: restaurant.image.startsWith('http')
            ? restaurant.image
            : DEFAULT_IMAGE,}}
        style={{width: '100%', aspectRatio: 5 / 3}}
      />

      <View style={{padding: 10}}>
        <Text
          style={{
            fontSize: 35,
            fontWeight: 'bold',
            color: '#000',
            // marginVertical: 5,
          }}>
          {restaurant.name}
        </Text>
        <Text style={{color: 'gray', fontSize: 15}}>
          $ {restaurant.deliveryFee.toFixed(2)} &#8226; {restaurant.minDeliveryTime}-
          {restaurant.maxDeliveryTime} minutes
        </Text>
        <Text>Menu</Text>
      </View>
    </View>
  );
};

export default Header;

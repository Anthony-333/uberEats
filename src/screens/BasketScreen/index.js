import {View, Text, FlatList} from 'react-native';
import React, {useState} from 'react';
import {AntDesign} from '@expo/vector-icons';

import restaurants from '../../../assets/data/restaurants.json';

const restaurant = restaurants[0];

const BasketDishItem = ({basketDish}) => {
  return (
    <View
      style={{flexDirection: 'row', alignItems: 'center', marginVertical: 15, marginHorizontal: 10}}>
      <View
        style={{
          backgroundColor: 'lightgray',
          paddingHorizontal: 5,
          marginRight: 10,
          borderRadius: 2,
        }}>
        <Text style={{}}>1</Text>
      </View>
      <Text style={{fontWeight: 'bold', color: 'black'}}>
        {basketDish.name}
      </Text>
      <Text style={{marginLeft: 'auto'}}>{basketDish.price}</Text>
    </View>
  );
};

const Basket = () => {
  return (
    <View style={{flex: 1, width: '100%', padding: 10}}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: '600',
          marginVertical: 10,
          color: 'black',
        }}>
        {restaurant.name}
      </Text>
      <Text style={{fontSize: 15, fontWeight: 'bold', color: 'black'}}>
        Your items
      </Text>

      <FlatList
        data={restaurant.dishes}
        renderItem={({item}) => <BasketDishItem basketDish={item} />}
      />

      <View
        style={{height: 1, backgroundColor: 'lightgrey', marginVertical: 10}}
      />

      <View
        style={{
          backgroundColor: 'black',
          marginTop: 'auto',
          padding: 20,
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', fontWeight: '600', fontSize: 15}}>
          Create Order
        </Text>
      </View>
    </View>
  );
};

export default Basket;

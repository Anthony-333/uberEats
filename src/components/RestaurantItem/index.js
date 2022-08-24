import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';

import {useNavigation} from '@react-navigation/native';

const RestaurantItem = ({restaurant}) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('Restaurant', {id: restaurant.id});
  };

  return (
    <Pressable
      onPress={onPress}
      style={{width: '100%', padding: 10, marginVertical: 5}}>
      <Image
        source={{
          uri: restaurant.image,
        }}
        style={{width: '100%', aspectRatio: 5 / 3, marginBottom: 5}}
      />
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: '#000',
              marginVertical: 5,
            }}>
            {restaurant.name}
          </Text>
          <Text style={{color: 'gray'}}>
            $ {restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}-
            {restaurant.maxDeliveryTime} minutes
          </Text>
        </View>

        <View
          style={{
            marginLeft: 'auto',
            backgroundColor: 'lightgray',
            width: 30,
            height: 25,
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text>{restaurant.rating}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default RestaurantItem;

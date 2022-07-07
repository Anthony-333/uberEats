import {View, Text, Image} from 'react-native';
import React from 'react';

const RestaurantItem = ({restaurant}) => {
  return (
    <View style={{width: '100%', padding: 10, marginVertical: 5}}>
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
    </View>
  );
};

export default RestaurantItem;

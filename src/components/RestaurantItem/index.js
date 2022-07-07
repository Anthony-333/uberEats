import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const RestaurantItem = ({restaurant}) => {
  return (
    <View style={styles.restaurantContainer}>
      <Image
        source={{
          uri: restaurant.image,
        }}
        style={styles.image}
      />
      <Text style={styles.title}>{restaurant.name}</Text>
      <Text style={styles.subtitle}>
        $ {restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}-
        {restaurant.maxDeliveryTime} minutes
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  restaurantContainer: {
    width: '100%',
    padding: 10,
    marginVertical: 5,
  },
  image: {
    width: '100%',
    aspectRatio: 5 / 3,
    marginBottom: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginVertical: 5,
  },
  subtitle: {
    color: 'gray',
  },
});

export default RestaurantItem;

import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const RestaurantItem = () => {
  return (
    <View style={styles.restaurantContainer}>
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg',
        }}
        style={styles.image}
      />
      <Text style={styles.title}>El Cabo Coffe Bar Tres De Mayo</Text>
      <Text style={styles.subtitle}>$1.99 15-30 minutes</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  restaurantContainer: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 5 / 4,
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

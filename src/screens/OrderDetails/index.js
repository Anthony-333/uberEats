import {View, Text, Image, FlatList} from 'react-native';
import React from 'react';

import orders from '../../../assets/data/orders.json';
import restaurants from '../../../assets/data/restaurants.json';
import OrderListItem from '../../components/OrderListItem';
import BasketDishItem from '../../components/BasketDishItem';

const order = orders[0];

const OrderDetailsHeader = () => {
  return (
    <View>
      <View style={{flex: 1}}>
        <Image
          source={{uri: order.Restaurant.image}}
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
            {order.Restaurant.name}
          </Text>
          <Text>{order.status} &#8226; 2 days ago</Text>

          <Text>Your orders</Text>
        </View>
      </View>
    </View>
  );
};

const OrderDetails = () => {
  return (
    <FlatList
      ListHeaderComponent={OrderDetailsHeader}
      data={restaurants[0].dishes}
      renderItem={({item}) => <BasketDishItem basketDish={item} />}
    />
  );
};

export default OrderDetails;

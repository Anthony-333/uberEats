import {View, Text, Image} from 'react-native';
import React from 'react';

const OrderListItem = ({order}) => {
  return (
    <View>
      <Image
        source={{uri: order.Restaurant.image}}
        style={{width: 100, height: 100}}
      />
      <View>
        <Text>{order.Restaurant.name}</Text>
        <Text>3 items $38.45</Text>
      </View>
    </View>
  );
};

export default OrderListItem;

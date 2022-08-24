import {View, Text} from 'react-native';
import React from 'react';

const BasketDishItem = ({basketDish}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15,
        marginHorizontal: 10,
      }}>
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

export default BasketDishItem;

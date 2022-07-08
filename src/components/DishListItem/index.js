import {View, Text, Image} from 'react-native';
import React from 'react';

const DishListItem = ({dish}) => {
  return (
    <View
      style={{
        margin: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderColor: 'lightgrey',
        flexDirection: 'row',
      }}>
      <View style={{flex: 1}}>
        <Text style={{fontWeight: 'bold', color: '#000', letterSpacing: 0.5}}>
          {dish.name}
        </Text>
        <Text style={{color: 'gray', marginVertical: 10}} numberOfLines={2}>
          {dish.description}
        </Text>
        <Text style={{fontSize: 16, color: '#000'}}>${dish.price}</Text>
      </View>
      {dish.image && (
        <Image
          source={{uri: dish.image}}
          style={{height: 75, aspectRatio: 1}}
        />
      )}
    </View>
  );
};

export default DishListItem;

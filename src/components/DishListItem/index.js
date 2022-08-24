import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const DishListItem = ({dish}) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate('Dish', {id: dish.id})}
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
    </Pressable>
  );
};

export default DishListItem;

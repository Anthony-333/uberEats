import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import React, {useState, useEffect} from 'react';
import {AntDesign} from '@expo/vector-icons';
import {useNavigation, useRoute} from '@react-navigation/native';
import {DataStore} from 'aws-amplify';
import {Dish} from '../../models';

const DishDetailsScreen = () => {
  const [dish, setDish] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const route = useRoute();

  const id = route.params?.id;

  const navigation = useNavigation();

  useEffect(() => {
    if (id) {
      DataStore.query(Dish, id).then(setDish);
    }
  }, [id]);

  const onMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const onPlus = () => {
    setQuantity(quantity + 1);
  };

  const getTotal = () => {
    return (dish.price * quantity).toFixed(2);
  };

  if (!dish) {
    return <ActivityIndicator size={'large'} />;
  }

  return (
    <View style={{flex: 1, width: '100%', padding: 10}}>
      <Text style={{fontSize: 30, fontWeight: '600', marginVertical: 10}}>
        {dish.name}
      </Text>
      <Text style={{color: 'gray'}}>{dish.description}</Text>
      <View
        style={{height: 1, backgroundColor: 'lightgrey', marginVertical: 10}}
      />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 10,
        }}>
        <TouchableOpacity onPress={onMinus}>
          <AntDesign name="minuscircleo" size={60} color={'black'} />
        </TouchableOpacity>

        <Text style={{fontSize: 25, marginHorizontal: 20}}>{quantity}</Text>
        <TouchableOpacity onPress={onMinus}>
          <AntDesign name="pluscircleo" size={60} color={'black'} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('Basket')}
        style={{
          backgroundColor: 'black',
          marginTop: 'auto',
          padding: 20,
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', fontWeight: '600', fontSize: 15}}>
          Add {quantity} to basket &#8226; ${getTotal()}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DishDetailsScreen;

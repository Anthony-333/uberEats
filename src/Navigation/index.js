import {View, Text} from 'react-native';
import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import RestaurantDetailsPage from '../screens/RestaurantDetailScreen';
import DishDetailsScreen from '../screens/DishDetailsScreen';
import Basket from '../screens/BasketScreen';
import OrderScreen from '../screens/OrderScreen';
import OrderDetails from '../screens/OrderDetails';
import ProfileScreen from '../screens/ProfileScreen';
import {Foundation, FontAwesome5, AntDesign} from '@expo/vector-icons';
import {useAuthContext} from '../context/AuthContext';
const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const {dbUser} = useAuthContext();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {dbUser ? (
        <Stack.Screen name="HomeTabs" component={HomeTabs} />
      ) : (
        <Stack.Screen name="Profile" component={ProfileScreen} />
      )}
    </Stack.Navigator>
  );
};

const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator barStyle={{backgroundColor: 'white'}}>
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <Foundation name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={OrderStackNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <AntDesign name="solution1" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="user-alt" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Restaurants" component={HomeScreen} />
      <HomeStack.Screen
        name="Restaurant"
        component={RestaurantDetailsPage}
        options={{headerShown: false}}
      />
      <HomeStack.Screen name="Dish" component={DishDetailsScreen} />
      <HomeStack.Screen name="Basket" component={Basket} />
    </HomeStack.Navigator>
  );
};

const OrdersStack = createNativeStackNavigator();

const OrderStackNavigator = () => {
  return (
    <OrdersStack.Navigator>
      <OrdersStack.Screen name="OrdersTab" component={OrderScreen} />
      <OrdersStack.Screen name="Order" component={OrderDetails} />
    </OrdersStack.Navigator>
  );
};

export default RootNavigator;

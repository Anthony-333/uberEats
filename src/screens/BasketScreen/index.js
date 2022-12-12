import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import BasketDishItem from "../../components/BasketDishItem";
import { useBasketContext } from "../../context/BasketContext";
import { useNavigation } from "@react-navigation/native";
import { useOrderContext } from "../../context/OrderContext";

const Basket = () => {
  const { restaurant, basketDishes, totalPrice } = useBasketContext();
  const { createOrder } = useOrderContext();
  const navigation = useNavigation();
  
  const onCreateOrder = async () => {
    await createOrder();
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1, width: "100%", padding: 10 }}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "600",
          marginVertical: 10,
          color: "black",
        }}
      >
        {restaurant?.name}
      </Text>
      <Text style={{ fontSize: 15, fontWeight: "bold", color: "black" }}>
        Your items
      </Text>

      <FlatList
        data={basketDishes}
        renderItem={({ item }) => <BasketDishItem basketDish={item} />}
      />

      <View
        style={{ height: 1, backgroundColor: "lightgrey", marginVertical: 10 }}
      />

      <TouchableOpacity
        onPress={onCreateOrder}
        style={{
          backgroundColor: "black",
          marginTop: "auto",
          padding: 20,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontWeight: "600", fontSize: 15 }}>
          Create Order (${totalPrice.toFixed(2)})
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Basket;

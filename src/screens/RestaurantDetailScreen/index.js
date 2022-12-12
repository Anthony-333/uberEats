import {
  View,
  Text,
  Image,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";

import * as Icons from "react-native-heroicons/solid";
import DishListItem from "../../components/DishListItem";
import Header from "./Header";
import { useRoute, useNavigation } from "@react-navigation/native";
import { DataStore } from "aws-amplify";
import { Restaurant, Dish } from "../../models/";
import { useBasketContext } from "../../context/BasketContext";

const RestaurantDetailsPage = () => {
  const [restaurant, setRestaurant] = useState(null);
  const [dishes, setDishes] = useState([]);

  const route = useRoute();
  const navigation = useNavigation();

  const id = route.params?.id;
  const {
    setRestaurant: setBasketRestaurant,
    basket,
    basketDishes,
  } = useBasketContext();

  useEffect(() => {
    //fetch restaurant with id.
    if (!id) {
      return;
    }
    setBasketRestaurant(null);
    DataStore.query(Restaurant, id).then(setRestaurant);
    DataStore.query(Dish, (dish) => dish.restaurantID("eq", id)).then(
      setDishes
    );
  }, [id]);

  useEffect(() => {
    setBasketRestaurant(restaurant);
  }, [restaurant]);

  if (!restaurant) {
    return <ActivityIndicator size={"large"} />;
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        ListHeaderComponent={() => <Header restaurant={restaurant} />}
        data={dishes}
        renderItem={({ item }) => <DishListItem dish={item} />}
        keyExtractor={(item) => item.name}
      />

      <View
        style={{
          backgroundColor: "white",
          padding: 5,
          position: "absolute",
          top: 20,
          left: 10,
          borderRadius: 50,
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Icons.ChevronLeftIcon
          onPress={() => navigation.goBack()}
          size={25}
          color="#000"
        />
      </View>
      {basket && (
        <TouchableOpacity
          onPress={() => navigation.navigate("Basket")}
          style={{
            backgroundColor: "black",
            marginTop: "auto",
            padding: 20,
            alignItems: "center",
            marginHorizontal: 10,
          }}
        >
          <Text style={{ color: "white", fontWeight: "600", fontSize: 15 }}>
            Open Basket ({basketDishes.length})
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default RestaurantDetailsPage;

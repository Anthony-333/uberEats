import { View, Text, Image, FlatList, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";

import orders from "../../../assets/data/orders.json";
import restaurants from "../../../assets/data/restaurants.json";
import OrderListItem from "../../components/OrderListItem";
import BasketDishItem from "../../components/BasketDishItem";
import { useOrderContext } from "../../context/OrderContext";
import { useRoute } from "@react-navigation/native";

const order = orders[0];

const OrderDetailsHeader = ({ order }) => {
  return (
    <View>
      <View style={{ flex: 1 }}>
        <Image
          source={{ uri: order.Restaurant.image }}
          style={{ width: "100%", aspectRatio: 5 / 3 }}
        />

        <View style={{ padding: 10 }}>
          <Text
            style={{
              fontSize: 35,
              fontWeight: "bold",
              color: "#000",
              // marginVertical: 5,
            }}
          >
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
  const [order, setOrder] = useState();
  const { getOrder } = useOrderContext();

  const route = useRoute();

  const id = route.params?.id;

  useEffect(() => {
    getOrder(id).then(setOrder);
  }, []);

  if (!order) {
    return <ActivityIndicator size={"large"} color="Black" />;
  }

  return (
    <FlatList
      ListHeaderComponent={() => <OrderDetailsHeader order={order} />}
      data={order.dishes}
      renderItem={({ item }) => <BasketDishItem basketDish={item} />}
    />
  );
};

export default OrderDetails;

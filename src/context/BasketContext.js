import React, { createContext, useState, useEffect, useContext } from "react";
import { DataStore } from "aws-amplify";
import { Basket, BasketDish } from "../models";
import { useAuthContext } from "./AuthContext";

const BasketContext = createContext({});

const BasketContextProvider = ({ children }) => {
  const { dbUser } = useAuthContext();

  const [restaurant, setRestaurant] = useState(null);
  const [basket, setBasket] = useState(null);

  useEffect(() => {
    DataStore.query(Basket, (b) =>
      b.restaurantID("eq", restaurant.id).userID("eq", dbUser.id)
    ).then((baskets) => setBasket(baskets[0]));
  }, [dbUser, restaurant]);

  const addDishToBasket = async (dish, quantity) => {
    //get existing basket or create new one
    let theBasket = basket || (await createNewBasket());

    // create a basketDish item and save to DataStore
    DataStore.save(
      new BasketDish({ quantity, Dish: dish, basketID: theBasket.id })
    );
  };

  const createNewBasket = async () => {
    const newBasket = await DataStore.save(
      new Basket({
        userID: dbUser.id,
        restaurantID: restaurant.id,
      })
    );
    setBasket(newBasket);
    return newBasket;
  };
  return (
    <BasketContext.Provider value={{ addDishToBasket, setRestaurant, basket }}>
      {children}
    </BasketContext.Provider>
  );
};

export default BasketContextProvider;

export const useBasketContext = () => useContext(BasketContext);

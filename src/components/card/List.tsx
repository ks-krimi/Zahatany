import React from "react";
import { FlatList } from "react-native";

import Item from "./Item";
import { data } from "./data";
import { useAppDispatch } from "../../app/hooks";

const Card: React.FC = () => {
  const dispatch = useAppDispatch();
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => Item(item, dispatch)}
      keyExtractor={(item) => item.category}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 8,
        paddingVertical: 16,
      }}
      style={{ position: "absolute", bottom: 20 }}
    />
  );
};

export default Card;

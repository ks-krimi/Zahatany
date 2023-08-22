import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { getPoints } from "../../features/point/pointSlice";
import { AppDispatch } from "../../rtk/store";
import { Category } from "./data";

const Item = (item: Category, dispatch: AppDispatch) => {
  return (
    <View style={styles.card}>
      <Text
        style={{
          fontWeight: "800",
          fontSize: 16,
          padding: 10,
        }}
      >
        {item.category}
      </Text>
      <FlatList
        data={item.subcategory}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              dispatch(getPoints(item.type));
            }}
            key={item.type}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
              padding: 6,
            }}
          >
            <MaterialIcons name={item.icon} size={24} color={item.color} />
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.type}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  card: {
    width: 250,
    marginHorizontal: 8,
    backgroundColor: "white",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 1,
  },
});

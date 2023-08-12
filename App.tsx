import "expo-dev-client";

import React from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";

import { store } from "./src/app/store";
import Map from "./src/components/map";

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.page}>
        <Map />
      </View>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

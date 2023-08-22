import "expo-dev-client";

import { Stack } from "expo-router";
import React from "react";
import { Provider } from "react-redux";

import { store } from "../rtk/store";

const RootLayoutNav = () => {
  return (
    <Provider store={store}>
      <Stack
        initialRouteName="index"
        screenOptions={{
          headerShown: true,
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="map"
        />
      </Stack>
    </Provider>
  );
};

export default RootLayoutNav;

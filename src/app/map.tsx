import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import Map from "../components/map";

const MapSreen = () => {
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <Map />
    </SafeAreaView>
  );
};

export default MapSreen;

import { useLocalSearchParams, useNavigation } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";

import Map from "../../components/map";

const MapSreen = () => {
  const { payload } = useLocalSearchParams();
  const { setOptions } = useNavigation();

  useEffect(() => {
    setOptions({
      headerTitle: payload,
    });
  }, []);

  return (
    <>
      <StatusBar style="auto" />
      <Map />
    </>
  );
};

export default MapSreen;

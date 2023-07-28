import "expo-dev-client";

import Mapbox, {
  Camera,
  FillLayer,
  LineLayer,
  MapView,
  ShapeSource,
} from "@rnmapbox/maps";
import axios, { AxiosResponse } from "axios";
import { FeatureCollection, GeoJsonProperties, MultiPolygon } from "geojson";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

Mapbox.setAccessToken(process.env.EXPO_PUBLIC_RNMAPBOX_PUB_KEY);

const App = () => {
  const [data, setData] =
    useState<FeatureCollection<MultiPolygon, GeoJsonProperties>>();
  const camera = useRef<Camera>(null);

  const getdata = useCallback(async () => {
    const res: AxiosResponse<
      FeatureCollection<MultiPolygon, GeoJsonProperties>
    > = await axios.get(
      `${process.env.EXPO_PUBLIC_API_URL}/geoserver/e-zaha/ows?service=WFS&version=1.0.0&cql_filter=adm1_en='Boeny'&request=GetFeature&typeName=e-zaha%3Aezaha&maxFeatures=50&outputFormat=application/json`
    );
    const geojson: FeatureCollection<MultiPolygon, GeoJsonProperties> =
      res.data;
    setData(geojson);
  }, []);

  useEffect(() => {
    if (!data) getdata();

    if (camera.current) {
      camera.current.setCamera({
        centerCoordinate: [47.5229344, -18.9057913],
        zoomLevel: 5,
      });
    }
  }, [camera.current, data]);

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapView style={styles.map}>
          <Camera ref={camera} />
          {data && (
            <ShapeSource id="adm" shape={data}>
              <LineLayer
                id="adm_line"
                style={{
                  lineColor: "red",
                  lineWidth: 1,
                }}
              />
              <FillLayer
                id="adm_fill"
                style={{
                  fillColor: "red",
                  fillOutlineColor: "black",
                  fillOpacity: 0.5,
                }}
              />
            </ShapeSource>
          )}
        </MapView>
      </View>
      {data ? (
        <Text>Fokontany: {data.features[15].properties?.adm4_en}</Text>
      ) : (
        <Text>Loading</Text>
      )}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    height: "95%",
    width: "100%",
  },
  map: {
    flex: 1,
  },
});

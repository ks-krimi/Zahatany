import Mapbox, {
  Callout,
  Camera,
  Image,
  Images,
  MapView,
  PointAnnotation,
  ShapeSource,
  SymbolLayer,
  UserLocation,
} from "@rnmapbox/maps";
import * as Location from "expo-location";
import { Feature, GeoJsonProperties, Point } from "geojson";
import React, { useEffect, useRef, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

import { getPoints } from "../../features/point/pointSlice";
import { useAppDispatch, useAppSelector } from "../../rtk/hooks";
import Card from "../card/List";

Mapbox.setAccessToken(process.env.EXPO_PUBLIC_RNMAPBOX_PUB_KEY);

const Map: React.FC = () => {
  const { geojson, isLoading, error } = useAppSelector((state) => state.points);
  const dispatch = useAppDispatch();
  const camera = useRef<Camera>(null);
  const [location, setLocation] = useState<Location.LocationObject>();
  const [selectedFeature, setSelectedFeature] = useState<
    Feature<Point, GeoJsonProperties>[]
  >([]);
  const [status, setStatus] = useState<Location.PermissionStatus>();

  useEffect(() => {
    if (!geojson && !isLoading) {
      dispatch(getPoints("pharmacy"));
    }
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      setStatus(status);
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  if (error.status)
    return <Text style={{ color: "red" }}>Error: {error.message}</Text>;

  return (
    <>
      <View style={styles.container}>
        {isLoading && (
          <ActivityIndicator
            style={{ position: "absolute", top: 0 }}
            size="large"
            color="#0000ff"
          />
        )}
        <MapView
          pitchEnabled
          projection="globe"
          style={styles.map}
          styleURL={Mapbox.StyleURL.Light}
          onDidFinishLoadingMap={() => {
            if (camera.current && location?.coords && geojson?.bbox) {
              camera.current.setCamera({
                centerCoordinate: [
                  location.coords.longitude,
                  location.coords.latitude,
                ],
                /* bounds: {
                  sw: [geojson?.bbox?.[2], geojson?.bbox?.[3]],
                  ne: [geojson?.bbox?.[0], geojson?.bbox?.[1]],
                }, */
                zoomLevel: 14,
                pitch: 30,
                heading: 20,
                animationMode: "flyTo",
                animationDuration: 10000,
              });
            }
          }}
          logoEnabled={true}
          scaleBarEnabled
          attributionEnabled={true}
          compassEnabled={true}
        >
          <Camera
            ref={camera}
            zoomLevel={0}
            animationMode="flyTo"
            animationDuration={5000}
            followUserLocation
            followZoomLevel={14}
          />
          {status == "granted" && (
            <UserLocation requestsAlwaysUse showsUserHeadingIndicator />
          )}
          {geojson && (
            <ShapeSource
              id="pointsSource"
              shape={geojson}
              onPress={(event) => {
                setSelectedFeature(
                  event.features as Feature<Point, GeoJsonProperties>[]
                );
              }}
            >
              <Images>
                <Image name="image-for-symbollayer">
                  <View
                    style={{
                      width: 10,
                      height: 10,
                      backgroundColor: "pink",
                      borderRadius: 10,
                    }}
                  />
                </Image>
              </Images>
              <SymbolLayer
                id="point"
                sourceID="pointsSource"
                minZoomLevel={1}
                style={{
                  iconImage: "image-for-symbollayer",
                  iconAllowOverlap: true,
                  iconIgnorePlacement: true,
                }}
              />
            </ShapeSource>
          )}

          {selectedFeature[0] && (
            <PointAnnotation
              key={selectedFeature[0].id as string}
              id="annotation"
              coordinate={selectedFeature[0].geometry.coordinates}
            >
              <Callout title={selectedFeature[0].properties?.name} />
            </PointAnnotation>
          )}
        </MapView>
        <Card />
      </View>
    </>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
  map: {
    flex: 1,
  },
});

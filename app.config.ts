import { ConfigContext, ExpoConfig } from "@expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  scheme: "zahatany",
  name: process.env.EXPO_PUBLIC_PROD_NAME,
  slug: process.env.EXPO_PUBLIC_PROD_SLUG,
  version: process.env.EXPO_PUBLIC_VERSION,
  description: process.env.EXPO_PUBLIC_PROD_DESCRIPTION,
  plugins: [
    "expo-router",
    [
      "@rnmapbox/maps",
      {
        RNMapboxMapsImpl: "mapbox",
        RNMapboxMapsDownloadToken: process.env.RNMAPBOX_MAPS_DOWNLOAD_TOKEN,
      },
    ],
    [
      "expo-location",
      {
        locationWhenInUsePermission: `Authorisé ${process.env.EXPO_PUBLIC_PROD_NAME} à accéder à votre position ?`,
      },
    ],
  ],
});

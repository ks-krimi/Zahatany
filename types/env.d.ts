export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // Expo config env
      EXPO_PUBLIC_PROD_NAME: string;
      EXPO_PUBLIC_PROD_SLUG: string;
      EXPO_PUBLIC_PROD_DESCRIPTION: string;
      EXPO_PUBLIC_VERSION: string;

      // RNMapbox env
      EXPO_PUBLIC_RNMAPBOX_PUB_KEY: string;
      RNMAPBOX_MAPS_DOWNLOAD_TOKEN: string;
    }
  }
}

import "expo-dev-client";

import { ThemeProvider, createTheme, lightColors } from "@rneui/themed";
import { Slot } from "expo-router";
import { Platform } from "react-native";
import { Provider } from "react-redux";

import FirstLaunchAppProvider from "../contexts/first_launch";
import { store } from "../rtk/store";

const theme = createTheme({
  lightColors: {
    ...Platform.select({
      default: lightColors.platform.android,
      ios: lightColors.platform.ios,
    }),
  },
});

const RootLayoutNav = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <FirstLaunchAppProvider>
          <Slot />
        </FirstLaunchAppProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default RootLayoutNav;

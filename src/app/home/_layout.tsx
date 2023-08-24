import { Stack } from "expo-router";

const AppRootLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerTitle: "Trouver des lieux pertinents",
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen
        options={{
          headerShown: true,
        }}
        name="map"
      />
    </Stack>
  );
};

export default AppRootLayout;

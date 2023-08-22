import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Onboading = () => {
  return (
    <View style={styles.page}>
      <Text>Onboading</Text>
      <Link replace href="/map">
        <Text>Go to Map</Text>
      </Link>
    </View>
  );
};

export default Onboading;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

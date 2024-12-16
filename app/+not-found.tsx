import { Link, Stack } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops! Not found" }} />
      <View style={styles.container}>
        <Link href="/" style={styles.button}>
          Go back to HOme Screen!
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  button: {
    padding: 10,
    backgroundColor: "#eee",
    borderRadius: 3,
    marginTop: 10,
  },
});

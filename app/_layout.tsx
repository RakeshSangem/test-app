import client from "@/apollo/client"; // Apollo Client setup
import LoginScreen from "@/components/Auth/Login";
import { AuthProvider, useAuth } from "@/context/Auth.context"; // Context logic
import { ApolloProvider } from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import HomeScreen from "./(tabs)";

// Apollo Client setup
const Stack = createStackNavigator();

export default function RootLayout() {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </ApolloProvider>
  );
}

const Navigation = () => {
  const [isLoading, setIsLoading] = useState(true); // Manage loading state
  const { isLoggedIn: isAuthenticated } = useAuth(); // Use context for auth state

  useEffect(() => {
    const initializeAuthState = async () => {
      try {
        // Fetch the auth token from AsyncStorage
        const token = await AsyncStorage.getItem("authToken");
        if (token) {
          // Here, you could use the token if needed (e.g., to set the auth state)
          console.log("Auth token retrieved:", token);
        }
      } catch (error) {
        console.error("Error retrieving auth token:", error);
      } finally {
        setIsLoading(false); // Stop loading indicator once initialization is done
      }
    };

    initializeAuthState();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <Stack.Navigator>
      {!isAuthenticated ? (
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      ) : (
        <Stack.Screen
          name="QC"
          component={HomeScreen}
          options={{ headerShown: true }}
        />
      )}
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff", // Optional: Match your app's theme
  },
});

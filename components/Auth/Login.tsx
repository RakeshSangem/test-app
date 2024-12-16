// LoginScreen.tsx
import { useAuth } from "@/context/Auth.context";
import { useRouter } from "expo-router";
import React from "react";
import { useForm } from "react-hook-form";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "../Button";
import CustomInput from "../CustomInput";

interface LoginFormValues {
  email: string;
  password: string;
}

const LoginScreen: React.FC = () => {
  const { login, loading } = useAuth();

  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginFormValues>({
    defaultValues: { email: "", password: "" },
    mode: "onSubmit",
  });

  const onSubmit = async (data: LoginFormValues) => {
    const email = data.email;
    const password = data.password;
    login(email, password);
  };

  // useEffect(() => {
  //   const checkAuth = async () => {
  //     const token = await AsyncStorage.getItem("authToken");
  //     if (token) {
  //       router.replace("/(tabs)");
  //     }
  //   };
  //   checkAuth();
  // }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <CustomInput
        label="Email"
        name="email"
        control={control}
        rules={{
          required: "Email is required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Enter a valid email address",
          },
        }}
        errorMessage={errors.email?.message}
        placeholder="Enter your email"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <CustomInput
        label="Password"
        name="password"
        control={control}
        rules={{
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Password must be at least 6 characters long",
          },
        }}
        errorMessage={errors.password?.message}
        placeholder="Enter your password"
        secureTextEntry
      />
      <Button
        label="Login"
        size="lg"
        onPress={handleSubmit(onSubmit)}
        disabled={!isValid || loading}
        fullWidth
        loading={loading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ffffff",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  button: {
    height: 50,
    backgroundColor: "#007bff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginTop: 20,
  },
  buttonDisabled: {
    backgroundColor: "#ccc",
  },
  buttonText: {
    fontSize: 18,
    color: "#ffffff",
    fontWeight: "600",
  },
});

export default LoginScreen;

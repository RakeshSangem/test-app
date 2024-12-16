import { LOGIN } from "@/apollo/queries";
import { useMutation } from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";

// Define types for AuthContext
type AuthContextType = {
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  isLoggedIn: boolean;
  user: User | null;
  loading: boolean;
};

type User = {
  id: string;
  email: string;
  name?: string;
};

const TOKEN_KEY = "authToken";
const USER_KEY = "authUser";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const [loginMutation] = useMutation(LOGIN); // Move the hook outside of the login function

  useEffect(() => {
    const initializeAuth = async () => {
      setLoading(true);
      try {
        const token = await AsyncStorage.getItem(TOKEN_KEY);
        if (token) {
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.error("Error initializing auth:", error);
      } finally {
        setLoading(false);
      }
    };
    initializeAuth();
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      await loginMutation({
        variables: { email, password },
        onCompleted: async (data) => {
          if (data?.tokenCreate?.errors?.length === 0) {
            const apiData = data?.tokenCreate;

            if (!apiData) return;
            // Store token and user in AsyncStorage
            await AsyncStorage.setItem(TOKEN_KEY, apiData?.token);
            await AsyncStorage.setItem(USER_KEY, JSON.stringify(apiData?.user));

            setIsLoggedIn(true);
            setUser(user);
          }
        },
      });
    } catch (error) {
      console.error("Login failed:", error);
      throw new Error("Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      await AsyncStorage.removeItem(TOKEN_KEY);
      await AsyncStorage.removeItem(USER_KEY);

      setIsLoggedIn(false);
      setUser(null);
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const value = {
    login,
    logout,
    isLoggedIn,
    user,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

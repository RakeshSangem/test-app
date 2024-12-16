import React from "react";
import {
  ActivityIndicator,
  ColorValue,
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from "react-native";

// Extend from PressableProps to inherit native button behaviors
interface ButtonProps extends PressableProps {
  label?: string;
  loading?: boolean;
  disabled?: boolean;
  variant?:
    | "default"
    | "secondary"
    | "outline"
    | "destructive"
    | "ghost"
    | "link";
  size?: "default" | "lg" | "sm" | "icon";
  fullWidth?: boolean;
}

// Define the Button component
export const Button: React.FC<ButtonProps> = ({
  label,
  loading = false,
  disabled = false,
  variant = "default",
  size = "default",
  fullWidth = false,
  onPress,
  ...props // Spread additional native props
}) => {
  // Dynamic container style
  const getContainerStyle = (): StyleProp<ViewStyle> => {
    return [
      styles.container,
      fullWidth ? styles.fullWidth : styles.centered,
      disabled ? styles.disabledContainer : variantStyles[variant]?.container,
      sizeStyles[size]?.container,
    ];
  };

  // Dynamic label style
  const getLabelStyle = (): StyleProp<TextStyle> => {
    return [
      styles.label,
      disabled ? styles.disabledLabel : variantStyles[variant]?.label,
      sizeStyles[size]?.label,
    ];
  };

  // Dynamic indicator color
  const getIndicatorColor = (): ColorValue => {
    return disabled
      ? styles.disabledIndicator.color
      : variantStyles[variant]?.indicator?.color || "#000";
  };

  return (
    <Pressable
      style={getContainerStyle()}
      onPress={onPress}
      disabled={disabled || loading}
      accessibilityRole="button" // Ensures the button is accessible
      {...props} // Pass native props like `testID`, `accessibilityLabel`, etc.
    >
      {loading ? (
        <ActivityIndicator size="small" color={getIndicatorColor()} />
      ) : (
        <Text style={getLabelStyle()}>{label}</Text>
      )}
    </Pressable>
  );
};

// Common styles
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingHorizontal: 16,
    marginVertical: 8,
  },
  label: {
    fontFamily: "System",
    fontWeight: "600",
    textAlign: "center",
  },
  disabledContainer: {
    backgroundColor: "#d3d3d3",
  },
  disabledLabel: {
    color: "#a9a9a9",
  },
  disabledIndicator: {
    color: "#a9a9a9",
  },
  fullWidth: {
    alignSelf: "stretch",
  },
  centered: {
    alignSelf: "center",
  },
});

// Variant styles
const variantStyles: Record<
  Required<ButtonProps>["variant"],
  {
    container: ViewStyle;
    label: TextStyle;
    indicator?: TextStyle;
  }
> = {
  default: {
    container: { backgroundColor: "#FFBC58" },
    label: { color: "#fff" },
    indicator: { color: "#fff" },
  },
  secondary: {
    container: { backgroundColor: "#d3d3d3" },
    label: { color: "#ffffff" },
    indicator: { color: "#ffffff" },
  },
  outline: {
    container: { borderWidth: 2, borderColor: "#808080" },
    label: { color: "#000" },
    indicator: { color: "#000" },
  },
  destructive: {
    container: { backgroundColor: "#FF0000" },
    label: { color: "#fff" },
    indicator: { color: "#fff" },
  },
  ghost: {
    container: { backgroundColor: "transparent" },
    label: { color: "#000", textDecorationLine: "underline" },
    indicator: { color: "#000" },
  },
  link: {
    container: { backgroundColor: "transparent" },
    label: { color: "#0000EE" },
    indicator: { color: "#0000EE" },
  },
};

// Size styles
const sizeStyles: Record<
  Required<ButtonProps>["size"],
  {
    container: ViewStyle;
    label: TextStyle;
  }
> = {
  default: {
    container: { height: 40, paddingHorizontal: 16 },
    label: { fontSize: 16 },
  },
  lg: {
    container: { height: 48, paddingHorizontal: 20 },
    label: { fontSize: 18 },
  },
  sm: {
    container: { height: 32, paddingHorizontal: 12 },
    label: { fontSize: 14 },
  },
  icon: {
    container: {
      width: 36,
      height: 36,
      justifyContent: "center",
      alignItems: "center",
    },
    label: {},
  },
};

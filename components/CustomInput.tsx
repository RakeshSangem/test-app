// CustomInput.tsx
import React from "react";
import { Control, Controller } from "react-hook-form";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";

interface CustomInputProps extends TextInputProps {
  label: string;
  name: string;
  control: Control<any>;
  rules?: object;
  errorMessage?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  name,
  control,
  rules,
  errorMessage,
  ...textInputProps
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[
              styles.input,
              errorMessage ? styles.inputError : styles.inputNormal,
            ]}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            {...textInputProps}
          />
        )}
      />
      {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  input: {
    height: 50,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 16,
  },
  inputNormal: {
    borderColor: "#ccc",
    backgroundColor: "#f9f9f9",
  },
  inputError: {
    borderColor: "#e63946",
    backgroundColor: "#fdecea",
  },
  error: {
    marginTop: 4,
    color: "#e63946",
    fontSize: 14,
  },
});

export default CustomInput;

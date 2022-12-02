import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const FormInput = ({
  labelValue,
  placeholderText,
  marginTo,
  ...rest
}) => {

  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={labelValue}
        numberOfLines={1}
        placeholder={placeholderText}
        placeholderTextColor="#666"
        {...rest}
      />
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  inputContainer: {
    height: 46,
    width: "90%",
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    borderColor: "#8B959A",
  },

  input: {
    padding: 10,
    flex: 1,
    fontSize: 16,

    color: "#333",
    justifyContent: "center",
    alignItems: "center",
  },
});

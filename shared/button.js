import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

const FlatButton = ({ buttonName, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{buttonName}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 14,
    backgroundColor: "#4c2e3c",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 16,
    textAlign: "center",
  },
});

export default FlatButton;

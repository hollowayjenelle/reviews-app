import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { globalStyles } from "../styles/global";

const ReviewDetails = ({ navigation, route }) => {
  const { title, body } = route.params;
  return (
    <View style={globalStyles.container}>
      <Text>{title}</Text>
      <Text>{body}</Text>
    </View>
  );
};

export default ReviewDetails;

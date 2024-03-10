import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { globalStyles, images } from "../styles/global";
import Card from "../shared/card";

const ReviewDetails = ({ route }) => {
  const { title, body, rating } = route.params;
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={styles.reviewTitle}>{title}</Text>
        <Text style={styles.reviewBody}>{body}</Text>
        <View style={styles.rating}>
          <Text style={styles.ratingTxt}>GamerInsight rating:</Text>
          <Image source={images.ratings[rating]} />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  ratingTxt: {
    marginRight: 8,
    fontWeight: "bold",
    fontSize: 16,
    marginTop: -2,
  },
  reviewTitle: {
    fontFamily: "nunito-bold",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 15,
  },
  reviewBody: {
    fontFamily: "nunito-regular",
    fontSize: 18,
  },
});

export default ReviewDetails;

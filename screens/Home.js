import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { globalStyles } from "../styles/global";
import Card from "../shared/card";
import ReviewForm from "./ReviewForm";

const Home = ({ navigation }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [reviews, setReviews] = useState([
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 5,
      body: "lorem ipsum",
      key: "1",
    },
    {
      title: "Gotta Catch Them All (again)",
      rating: 4,
      body: "lorem ipsum",
      key: "2",
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: "lorem ipsum",
      key: "3",
    },
  ]);

  const closeModal = () => setModalOpen(false);
  const openModal = () => setModalOpen(true);

  const addReview = (review) => {
    const newReview = {
      ...review,
      key: Math.random.toString(),
    };
    setReviews((prevReviews) => [newReview, ...prevReviews]);
    closeModal();
  };

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <Ionicons
              name="close-circle"
              size={24}
              color="black"
              onPress={closeModal}
              style={styles.modalToggle}
            />
            <ReviewForm handleAdd={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <Ionicons
        style={styles.modalToggle}
        name="add"
        size={24}
        color="black"
        onPress={openModal}
      />
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Review Details", item)}
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  modalToggle: {
    marginBottom: 10,
    padding: 10,
    alignSelf: "center",
  },
  modalContent: {
    flex: 1,
  },
});

export default Home;

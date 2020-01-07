import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { Rating } from "react-native-elements";
import firebase from "firebase";
import { NavigationContext } from "react-navigation";
export default function App({ navigation }) {
  const ratingCompleted = rating => {
    console.log("Rating is: " + rating);
  };

  const [fullreview, setFullreview] = useState({
    name: "",
    position: "",
    lengthJob: "",
    review: "",
    recommended: "YES",
    rating: 3,
    key: Math.random().toString()
  });

  const changeHandlerName = e => {
    setFullreview({ ...fullreview, name: e });
  };
  const changeHandlerPosition = e => {
    setFullreview({ ...fullreview, position: e });
  };
  const changeHandlerReview = e => {
    setFullreview({ ...fullreview, review: e });
  };
  const changeHandlerExperience = e => {
    setFullreview({ ...fullreview, lengthJob: e });
  };

  const submitHandler = () => {
    firebase
      .database()
      .ref("reviews")
      .set(fullreview)
      .then(data => {
        console.log("data ", data);
      })
      .catch(error => {
        console.log("error ", error);
      });

    navigation.navigate("EXPERIENCE");
  };
  return (
    <View style={styles.container}>
      <View style={styles.wind}>
        <Text style={styles.header}>Fill out the following information </Text>
      </View>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Company or school name"
          onChangeText={e => changeHandlerName(e)}
        />
        <TextInput
          style={styles.input}
          placeholder="Position"
          onChangeText={changeHandlerPosition}
        />
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Length of experience in month"
          onChangeText={changeHandlerExperience}
        />
        <TextInput
          style={styles.input}
          placeholder="Review"
          onChangeText={changeHandlerReview}
        />
        <TextInput style={styles.input} placeholder="Recommend YES or NO" />
        <Rating
          showRating
          onFinishRating={ratingCompleted}
          style={{ paddingVertical: 10 }}
        />
        <Button
          title="Send review"
          onPress={submitHandler}
          color="coral"
          clearButtonMode="always"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    color: "coral"
  },
  wind: {
    marginTop: 0,
    marginBottom: 15
  },
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd"
  },
  button: {
    color: "green"
  }
});

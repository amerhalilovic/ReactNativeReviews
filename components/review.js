import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Label } from "react-native";
import { Rating } from "react-native-elements";
import firebase from "firebase";

export default function Review({ data }) {
  const clickHandle = () => {
    firebase
      .database()
      .ref("Users/")
      .remove();
  };
  return (
    <View style={styles.container}>
      <View>
        <Text>Company or school name: </Text>
        <Text style={styles.italic}>{data.name}</Text>
        <Text>Position: </Text>
        <Text style={styles.italic}>{data.position}</Text>
        <Text>Length of experience in month:</Text>
        <Text style={styles.italic}>{data.lengthJob} </Text>
        <Text>Review:</Text>
        <Text style={styles.italic}>{data.review}</Text>
        <Text>Recommend:</Text>
        <Text style={styles.italic}>{data.recommended}</Text>
      </View>
      <View>
        <Rating
          showRating
          startingValue={data.rating}
          style={{ paddingVertical: 10 }}
        />
      </View>
      <View>
        <Button
          title="Delete"
          color="red"
          onPress={() => clickHandle(data.key)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
    backgroundColor: "#fff",
    alignItems: "center",
    borderWidth: 2,
    margin: 10
  },
  italic: {
    fontWeight: "bold"
  }
});

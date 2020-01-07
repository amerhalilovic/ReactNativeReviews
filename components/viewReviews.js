import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import firebase from "firebase";
import { Button } from "react-native";
import Review from "./review";

export default function App({ navigation }) {
  const [data, setData] = useState([
    {
      name: "Burch University",
      position: "Professor",
      lengthJob: "6",
      review: "Good,really,I felt proud",
      recommended: "YES",
      rating: 5
    }
  ]);

  const pressHandler = () => {
    navigation.navigate("LEAVEYOURREVIEW");
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            title="Add new review"
            color="lightgreen"
            onPress={pressHandler}
          />
        </View>
        <View style={styles.list}>
          {data.map(data => {
            return <Review data={data} />;
          })}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center"
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 10,
    flexDirection: "column"
  },
  list: {
    flex: 1,
    marginTop: 20
  }
});

import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View, ScrollView } from "react-native";
import { Rating } from "react-native-elements";
import { Button } from "react-native";
import Review from "./review";

export default function App({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("LEAVEYOURREVIEW");
  };

  const [data, setData] = useState([
    {
      name: "Burch University",
      position: "Dekan",
      lengthJob: 12,
      review: "Bla bla bla bla bla bla bla",
      recommended: "Yes",
      rating: 2,
      key: "1"
    },
    {
      name: "Burch University",
      position: "Dekan",
      lengthJob: 12,
      review: "Bla bla bla bla bla bla bla",
      recommended: "Yes",
      rating: 2,
      key: "2"
    }
  ]);
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
            return <Review data={data} key={data.key} />;
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

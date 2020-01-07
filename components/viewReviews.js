import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import firebase from "firebase";
import { Button } from "react-native";
import Review from "./review";

export default function App({ navigation }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    firebase
      .database()
      .ref("reviews")
      .once("value", res => {
        if (!Object.entries(res).length) return data;
        setData([...data, res]);
      });
  }, []);

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
            return <Review data={data} setData={setData} />;
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

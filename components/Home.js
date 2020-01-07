import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Home({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("VIEWREVIEWS");
  };
  console.log(navigation);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>EXPERIENCE FEEDBACK</Text>
      <Text style={styles.underText}>
        Help others by leaving your feedback.
      </Text>
      <View style={styles.button}>
        <Button
          onPress={pressHandler}
          title="START"
          color="grey"
          type="outline"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "coral",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white"
  },
  underText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white"
  },
  button: {
    marginTop: 30
  }
});

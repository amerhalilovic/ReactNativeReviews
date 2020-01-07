import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function Home({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("EXPERIENCE");
  };
  console.log(navigation);
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.marginBottom}>Please fill login form</Text>
      </View>
      <View style={styles.textContainer}>
        <TextInput style={styles.input} placeholder="email address" />
        <TextInput
          style={styles.input}
          placeholder="password"
          secureTextEntry={true}
        />
      </View>
      <View style={styles.button}>
        <Button
          onPress={pressHandler}
          title="LOGIN"
          color="coral"
          type="outline"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "coral",
    alignItems: "center",
    justifyContent: "center"
  },
  textContainer: {},
  marginBottom: {
    marginBottom: 20,
    fontSize: 20,
    fontWeight: "bold",
    color: "coral"
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
  },
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderWidth: 1,
    borderBottomColor: "#ddd",
    borderRadius: 20
  }
});

import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import InputData from "./components/inputData";
import Navigator from "./routes/routes";
import firebase from "firebase";

export default function App() {
  useEffect(() => {
    var firebaseConfig = {
      apiKey: "AIzaSyCc-DnRmfH9T38ZdL-S-wWWaB4PKvwbD9g",
      authDomain: "react-firebase-19421.firebaseapp.com",
      databaseURL: "https://react-firebase-19421.firebaseio.com",
      projectId: "react-firebase-19421",
      storageBucket: "react-firebase-19421.appspot.com",
      messagingSenderId: "999387387625",
      appId: "1:999387387625:web:3ff5ba55e736274e958278",
      measurementId: "G-LL3D4RBWE2"
    };

    firebase.initializeApp(firebaseConfig);
    console.log(firebase);
  }, []);

  return <Navigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

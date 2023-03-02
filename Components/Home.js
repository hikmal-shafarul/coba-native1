import { View, Text } from "react-native";
import React from "react";
import { Image } from "react-native";
import { StyleSheet } from "react-native";

const Home = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.box}>
          <Image
            source={require("../assets/1.jpg")}
            style={{ width: 200, height: 200, alignSelf: "center" }}
          />
          <Text style={styles.titleMenu}>Nasi Goreng Enak!</Text>
          <Text style={styles.desc}>Rp. 15.000,00</Text>
          <Text style={styles.desc}>
            Nasi goreng buatan koki profesional yang dimasak dengan sempurna
            seperti rasa syurga!
          </Text>
        </View>

        <Text>Hello World!</Text>
      </View>
      <Text>Yoo Home!</Text>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "aliceblue",
  },
  navbar: {
    backgroundColor: "coral",
    padding: 10,
    flexDirection: "row",
    gap: 10,
  },
  box: {
    width: 300,
    padding: 10,
    backgroundColor: "#666",
    margin: 40,
  },
  titleMenu: {
    fontWeight: "bold",
    fontSize: 16,
    color: "white",
    margin: 10,
  },
  desc: {
    color: "white",
    margin: 10,
  },
});
export default Home;

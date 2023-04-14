import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

const Welcome = (props) => {
  return (
    <View style={style.container}>
      <Image
        style={{
          height: "100%",
          width: "100%",
        }}
        source={require("../../assets/modifyz.jpg")}
      />

      <Text
        style={{
          fontSize: 55,
          position: "absolute",
          color: "black",
          marginTop: "70%",
          marginLeft: "25%",
          fontWeight: "bold",
        }}
      >
        Modifyz
      </Text>

      <View style={style.btn}>
        <Button
          title="LOGIN"
          color={"black"}
          onPress={() => props.navigation.navigate("LOGIN")}
        />
        <Button
          title="SIGN UP"
          color={"black"}
          onPress={() => props.navigation.navigate("SIGN UP")}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "space-between",
  },
  btn: {
    position: "absolute",
    marginTop: "160%",
    marginLeft: "34%",
    gap: 30,
  },
  txt: {
    color: "white",
    fontSize: 52,
  },
});
export default Welcome;

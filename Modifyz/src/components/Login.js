import React from "react";
import { Image, Text, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const Login = (props) => {
  return (
    <View
      style={{
        paddingHorizontal: 25,
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        paddingBottom: 50,
        paddingTop: 70,
      }}
    >
      <View style={{ alignItems: "center" }}>
        <Image
          style={{
            height: 170,
            width: 170,
            borderRadius: 150,
          }}
          source={require("../../assets/loginIcon.png")}
        />
      </View>

      <View>
        <Text style={{ fontWeight: "bold", fontSize: 50, textAlign: "center" }}>
          Let's you in
        </Text>
      </View>

      <View style={{ gap: 20 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff",
            borderWidth: 0.5,
            borderColor: "grey",
            borderRadius: 5,
            paddingVertical: 10,
            gap: 15,
          }}
        >
          <FontAwesome5 name="facebook" size={30} color="#0040cf" />
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>
            Continue with Facebook
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff",
            borderWidth: 0.5,
            borderColor: "grey",
            borderRadius: 5,
            paddingVertical: 10,
            gap: 15,
          }}
        >
          <FontAwesome5 name="google" size={24} color="green" />
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>
            Continue with Google
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff",
            borderWidth: 0.5,
            borderColor: "grey",
            borderRadius: 5,
            paddingVertical: 10,
            gap: 15,
          }}
        >
          <FontAwesome5 name="apple" size={32} color="black" />
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>
            Continue with Apple
          </Text>
        </View>
      </View>

      <View>
        <Text
          style={{
            textAlign: "center",
            fontSize: 15,
            fontWeight: "bold",
            color: "grey",
          }}
        >
          or
        </Text>
      </View>

      <View>
        <Text
          style={{
            backgroundColor: "orange",
            borderRadius: 30,
            textAlign: "center",
            color: "white",
            fontWeight: "bold",
            fontSize: 15,
            paddingVertical: 15,
          }}
        >
          Sign in with password
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontWeight: 400, color: "grey" }}>
          Don't have an account ?{" "}
        </Text>
        <Text
          style={{ color: "orange", fontWeight: "bold" }}
          onPress={() => props.navigation.navigate("SIGN UP")}
        >
          {" "}
          Sign Up
        </Text>
      </View>
    </View>
  );
};

export default Login;

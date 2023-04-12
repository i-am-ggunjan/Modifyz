import React from "react";
import { StyleSheet } from "react-native";

const FormStyle = StyleSheet.create({
  section: {
    flex: 1,
    backgroundColor: "rgb(201, 204, 206)",
    alignItems: "center",
    justifyContent: "center",
  },

  form: {
    backgroundColor: "rgba(214, 218, 222, 0.639)",
    padding: 20,
    gap: 10,
  },

  text: {
    fontWeight: "bold",
    fontSize: 15,
    color: "green",
  },

  input: {
    borderRadius: 5,
    borderColor: "grey",
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 5,
    width: 300,
  },

  heading: {
    color: "green",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 30,
    textDecorationLine: "underline",
  },

  error: {
    color: "red",
  },
});

export default FormStyle;

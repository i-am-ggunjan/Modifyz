import React from "react";
import { useQuery } from "react-query";
import { ScrollView, Text, View } from "react-native";

function Get() {
  const { isLoading, isError, error, data } = useQuery("register", () =>
    fetch("http://192.168.174.193:3000/first").then((res) => res.json())
  );

  if (isLoading)
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );

  if (error)
    return (
      <View>
        <Text>Error.....</Text>
      </View>
    );

  return (
    <ScrollView>
      <Text>Register</Text>
      {data.map((value) => {
        return (
          <View key={value.id}>
            <Text>{value.name}</Text>
            <Text>{value.email}</Text>
            <Text>{value.address}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
}

export default Get;

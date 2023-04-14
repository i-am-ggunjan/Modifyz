import React from "react";
import { Button, Image, Text, TextInput, View } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

const Signup = (props) => {
  const form = useForm({});

  const { control, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data) => {
    console.warn(data);
  };

  return (
    <View
      style={{
        paddingHorizontal: 25,
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        paddingBottom: 50,
        paddingTop: 130,
      }}
    >
      <View>
        <Text style={{ fontWeight: 400, fontSize: 50 }}>
          Create Your Account
        </Text>
      </View>

      <View style={{ gap: 10 }}>
        <View>
          <Controller
            control={control}
            rules={{
              maxLength: 100,
              required: {
                value: true,
                message: "⊗ Filled it",
              },
              pattern: {
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                message: "⊗ Invalid ",
              },
            }}
            render={({ field: { onChange, value } }) => (
              <View
                style={{
                  paddingLeft: 10,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#fff",
                  borderWidth: 0.5,
                  borderColor: "#000",
                  height: 40,
                  borderRadius: 5,
                }}
              >
                <MaterialCommunityIcons name="email" size={24} color="grey" />
                <TextInput
                  placeholder="abc@gmail.com"
                  onChangeText={onChange}
                  value={value}
                  style={{
                    flex: 1,
                    paddingHorizontal: 15,
                    paddingVertical: 5,
                  }}
                  underlineColorAndroid="transparent"
                />
              </View>
            )}
            name="email"
          />
          <Text style={{ color: "red" }}>{errors.email?.message}</Text>
        </View>

        <View>
          <Controller
            control={control}
            rules={{
              required: {
                value: true,
                message: "⊗ Filled it",
              },
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message: "⊗ Invalid ",
              },
            }}
            render={({ field: { onChange, value } }) => (
              <View
                style={{
                  paddingLeft: 10,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#fff",
                  borderWidth: 0.5,
                  borderColor: "#000",
                  height: 40,
                  borderRadius: 5,
                }}
              >
                <FontAwesome5 name="lock" size={22} color="grey" />
                <TextInput
                  placeholder="Abcd@123"
                  onChangeText={onChange}
                  value={value}
                  style={{
                    flex: 1,
                    paddingHorizontal: 15,
                    paddingVertical: 5,
                  }}
                  underlineColorAndroid="transparent"
                />
              </View>
            )}
            name="password"
          />
          <Text style={{ color: "red" }}>{errors.password?.message}</Text>
        </View>
      </View>

      <View style={{ gap: 20 }}>
        <Text style={{ textAlign: "center", fontWeight: "bold" }}>
          Remember me
        </Text>
        <Button
          title="Sign up"
          color={"orange"}
          onPress={handleSubmit(onSubmit)}
        />
      </View>

      <View style={{ gap: 30 }}>
        <View>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              color: "grey",
              fontSize: 16,
            }}
          >
            or continue with{" "}
          </Text>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <FontAwesome5 name="facebook" size={30} color="#0040cf" />
          <FontAwesome5 name="google" size={24} color="green" />
          <FontAwesome5 name="apple" size={32} color="black" />
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontWeight: 400, color: "grey" }}>
          Already have an account ?{" "}
        </Text>
        <Text
          style={{ color: "orange", fontWeight: "bold" }}
          onPress={() => props.navigation.navigate("LOGIN")}
        >
          {" "}
          Login
        </Text>
      </View>
    </View>
  );
};

export default Signup;

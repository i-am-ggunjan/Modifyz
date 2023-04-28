import React from "react";
import { Button, Text, TextInput, View } from "react-native";
import { useForm, Controller } from "react-hook-form";
import FormStyle from "../FormStyle";
import { useMutation } from "react-query";

const Post = () => {
  const form = useForm({});

  const { control, handleSubmit, formState } = form;
  const { errors } = formState;

  const { mutate } = useMutation((formData) =>
    fetch("http://192.168.174.193:3000/first", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }).then((res) => res.json())
  );

  const onSubmit = (formData) => {
    mutate(formData);
    console.warn(formData);
  };

  return (
    <View style={FormStyle.section}>
      <View style={FormStyle.form}>
        <Text style={FormStyle.heading}>DETAILS FORM</Text>
        <View>
          <Text style={FormStyle.text}>Enter your Name</Text>
          <Controller
            control={control}
            rules={{
              required: {
                value: true,
                message: "⊗ Filled it",
              },
            }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder="Shree Krishna"
                onChangeText={onChange}
                value={value}
                style={FormStyle.input}
              />
            )}
            name="name"
          />
          <Text style={FormStyle.error}>{errors.name?.message}</Text>
        </View>

        <View>
          <Text style={FormStyle.text}>Enter your Email</Text>
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
              <TextInput
                placeholder="krishna@gmail.com"
                onChangeText={onChange}
                value={value}
                style={FormStyle.input}
              />
            )}
            name="email"
          />
          <Text style={FormStyle.error}>{errors.email?.message}</Text>
        </View>

        <View>
          <Text style={FormStyle.text}>Enter your Address</Text>
          <Controller
            control={control}
            rules={{
              maxLength: 100,
              required: {
                value: true,
                message: "⊗ Filled it",
              },
            }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder="Vrindavan"
                onChangeText={onChange}
                value={value}
                style={FormStyle.input}
              />
            )}
            name="address"
          />
          <Text style={FormStyle.error}>{errors.address?.message}</Text>
        </View>

        <Button
          title="Submit"
          color={"green"}
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </View>
  );
};

export default Post;

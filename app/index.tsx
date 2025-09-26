import React from "react";
import { View, Text, Image, ScrollView, TextInput } from "react-native";

const App = () => {
  return (
    <ScrollView className="flex-1 p-4">
      <Text className="text-lg font-bold">Some text</Text>

      <View className="mt-4">
        <Text className="text-base">Some more text</Text>
        <Image
          source={{
            uri: "https://reactnative.dev/docs/assets/p_cat2.png",
          }}
          className="w-52 h-52 rounded-xl"
        />
      </View>

      <TextInput
        className="h-10 border border-gray-400 rounded-md mt-4 px-2"
        defaultValue="You can type in me"
      />
    </ScrollView>
  );
};

export default App;

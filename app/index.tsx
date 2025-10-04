import React from 'react';
import {View, Text, ScrollView, TextInput, Button} from 'react-native';

const app = () => {
  return(
    <ScrollView>
    <View>
      <Text>Hello World</Text>
      <TextInput placeholder= "Type here"/>
      <View  style={{margin: 20}}>
      <Button title="press me" onPress ={() => {}}/>
      </View>
    </View>
    </ScrollView>
  
);
};

export default app;
import React from "react"
import { StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserList from "./screens/UserList";
import CreateUserScreen from "./screens/CreateUserScreen";
import UserDetailScreen from "./screens/UserDetailScreen";
import Home from "./screens/Home";

const Stack = createNativeStackNavigator();

function MyStack(){
  return(
    <Stack.Navigator styles={styles.container}>
      <Stack.Screen name="Home" component={ Home } screen options={{ title: 'Login' }} />
      <Stack.Screen name="UserList" component={ UserList } options={{ title: 'Users List' }} />
      <Stack.Screen name="CreateUserScreen" component={ CreateUserScreen } options={{ title: 'Create a new user' }} />
      <Stack.Screen name="UserDetailScreen" component={ UserDetailScreen } options={{ title: 'User Detail' }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    textAlign:"center"
  },
});

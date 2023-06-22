import React from "react";
import { Text, View, StyleSheet, TextInput, Pressable } from "react-native";
import { Image } from "react-native-elements";

const Home = (props) => {
  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 35 }}>
        <Image style={styles.image} source={require("../assets/icon.png")} />
      </View>
      <View>
        <Text style={ styles.text }>
          ¡Bienvenido a nuestra app de prueba! Aquí podrás experimentar y
          explorar nuestras funcionalidades.
        </Text>
      </View>
      <View>
        <Pressable style={styles.button} onPress={() => props.navigation.navigate("UserList")} >
          <Text style={ styles.textButton} >
            Entrar
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 25
  },
  text:{
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    marginBottom:35,
    textAlign:"center"
  },
  image: {
    height: 150,
    width: 150,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  textButton: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default Home;

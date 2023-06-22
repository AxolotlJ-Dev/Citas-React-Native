import React, { useState } from "react";
import { View, Button, TextInput, ScrollView, StyleSheet } from "react-native";
import db from "../database/firebase";
import { collection, addDoc } from "firebase/firestore";

const CreateUserScreen = (props) => {
  const [state, setState] = useState({
    name: "",
    petName: "",
    phone: "",
    adrees: "",
    dateOne: "",
    dateTwo: "",
  });

  const handleChangeText = (name, value) => {
    setState({ ...state, [name]: value });
  };

  const saveNewUser = async () => {
    if (state.name === "") {
      alert("please provide a name");
    } else {
      try {
        await addDoc(collection(db, "users"), {
          name: state.name,
          petName: state.petName,
          phone: state.phone,
          adrees: state.adrees,
          dateOne: state.dateOne,
          dateTwo: state.dateTwo,
        });
        props.navigation.navigate("UserList");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <ScrollView style={Styles.container}>
      <View style={Styles.inputGroup}>
        <TextInput
          multiline={true}
          placeholder="Nombre de la persona"
          onChangeText={(value) => handleChangeText("name", value)}
        />
      </View>
      <View style={Styles.inputGroup}>
        <TextInput
          multiline={true}
          placeholder="Nombre de la mascota"
          onChangeText={(value) => handleChangeText("petName", value)}
        />
      </View>
      <View style={Styles.inputGroup}>
        <TextInput
          multiline={true}
          placeholder="Telefono"
          onChangeText={(value) => handleChangeText("phone", value)}
        />
      </View>
      <View style={Styles.inputGroup}>
        <TextInput
          multiline={true}
          placeholder="Direccion"
          onChangeText={(value) => handleChangeText("adress", value)}
        />
      </View>
      <View style={Styles.inputGroup}>
        <TextInput
          multiline={true}
          placeholder="Dato uno"
          onChangeText={(value) => handleChangeText("dateOne", value)}
        />
      </View>
      <View style={Styles.inputGroup}>
        <TextInput
          multiline={true}
          placeholder="Dato dos"
          onChangeText={(value) => handleChangeText("dateTwo", value)}
        />
      </View>

      <View style={Styles.inputGroup}>
        <Button title="Agregar Usuario" onPress={() => saveNewUser()}></Button>
      </View>
    </ScrollView>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});

export default CreateUserScreen;

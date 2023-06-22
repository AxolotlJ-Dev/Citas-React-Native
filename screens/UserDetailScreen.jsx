import { collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { View, Button, TextInput, ScrollView, StyleSheet, Alert } from "react-native";
import db from "../database/firebase";
import { ActivityIndicator } from "react-native-web";

const UserDetailScreen = (props) => {


  const initialState = {
    id:"",
    name:"",
    petName:"",
    phone:"",
    adrees:"",
    dateOne:"",
    dateTwo:"",
  }

  const [user, setUser] = useState( initialState )

  const [loading, setLoading] = useState(true)

  const getUserById = async (id) => {
    const dbRef = collection(db, "users");
    const querySnapshot = await getDocs(dbRef);

    querySnapshot.forEach((doc) => {
      if (doc.id === id) {
        const user = doc.data();
        setUser({
          ...user,
          id: doc.id
        })
        setLoading( false )
      }
    });
  };

  useEffect(() => {
    getUserById(props.route.params.userId);
  }, []);

  const handleChangeText = (name, value) => {
    setUser({...user, [name]: value })
  }


  const deleteUser = async () =>{
    const dbRef = doc(db, "users", props.route.params.userId);
    await deleteDoc(dbRef);
    props.navigation.navigate("UserList");
  }

  const openConfirmationAlert = () => {
    Alert.alert("Remove The User", "are you Sure?", [
      { text: "Yes", onPress: () => deleteUser()},
      { text: "No", onPress: () => console.log(false)}

    ])
  }

  const UpdateUser = async () => {
    const dbRef = doc(db, "users", props.route.params.userId);
    const updateData = {
      name: user.name,
      petName: user.petName,
      phone: user.phone,
      adrees: user.adrees,
      dateOne: user.dateOne,
      dateTwo: user.dateTwo
    }

    await updateDoc( dbRef, updateData);

    setUser(initialState);
    props.navigation.navigate("UserList");

  }

  if ( loading ){
    <View>
      <ActivityIndicator size="large" color="#9e9e9e" />
    </View>
  }

  return (
    <ScrollView style={Styles.container}>
      <View style={Styles.inputGroup}>
        <TextInput multiline={true} 
          placeholder="Nombre de la persona"
          onChangeText={(value) => handleChangeText("name", value)}
          value={ user.name }
        />
      </View>
      <View style={Styles.inputGroup}>
        <TextInput multiline={true} 
          placeholder="Nombre de la Mascota"
          onChangeText={(value) => handleChangeText("petName", value)}
          value={ user.petName }
        />
      </View>
      <View style={Styles.inputGroup}>
        <TextInput multiline={true} 
          placeholder="Telefono"
          onChangeText={(value) => handleChangeText("phone", value)}
          value={ user.phone}
        />
      </View>
      <View style={Styles.inputGroup}>
        <TextInput multiline={true} 
          placeholder="Direccion"
          onChangeText={(value) => handleChangeText("adrees", value)}
          value={ user.adrees}
        />
      </View>
      <View style={Styles.inputGroup}>
        <TextInput multiline={true} 
          placeholder="Dato uno"
          onChangeText={(value) => handleChangeText("dateOne", value)}
          value={ user.dateOne}
        />
      </View>
      <View style={Styles.inputGroup}>
        <TextInput multiline={true} 
          placeholder="Dato dos"
          onChangeText={(value) => handleChangeText("dateTwo", value)}
          value={ user.dateTwo}
        />
      </View>
      

      <View style={Styles.inputGroup}>
        <Button color="#19AC52" title="Update User" onPress={() => UpdateUser()}></Button>
      </View>
      <View>
        <Button color="#E37399" title="Delete User" onPress={() => openConfirmationAlert() }></Button>
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

export default UserDetailScreen;

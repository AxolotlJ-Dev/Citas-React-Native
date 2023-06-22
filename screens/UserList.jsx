import React, { useEffect, useState } from "react";
import { ScrollView, Button } from "react-native";
import db from "../database/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { ListItem, Avatar } from "react-native-elements";

const UserList = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, "users"), (querySnapshot) => {
      const users = [];
      querySnapshot.forEach((doc) => {
        const { name, petName, phone, adress, dateOne, dateTwo } = doc.data();
        users.push({
          id: doc.id,
          name,
          petName,
          phone,
          adress,
          dateOne, 
          dateTwo
        });
      });

      setUsers(users);
    });
  }, []);

  return (
    <ScrollView>
      <Button
        title="Crear Usuario"
        onPress={() => props.navigation.navigate("CreateUserScreen")}
      />
      {users.map((user) => {
        return (
          <ListItem
            key={user.id}
            bottomDivider
            onPress={() =>
              props.navigation.navigate("UserDetailScreen", { userId: user.id })
            }
          >
            <ListItem.Chevron />
            <Avatar
              source={{
                uri: "https://cdn.pixabay.com/photo/2020/09/18/05/58/lights-5580916__340.jpg",
              }}
              size={48}
              rounded
            />
            <ListItem.Content>
              <ListItem.Title>{user.name}</ListItem.Title>
              <ListItem.Subtitle>{user.phone}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        );
      })}
    </ScrollView>
  );
};

export default UserList;

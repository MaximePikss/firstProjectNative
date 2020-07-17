import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/actions";

const TaskForm = () => {
  const [title, setTile] = useState("");
  const dispatch = useDispatch();

  const _onChangeText = (value) => {
    setTile(value);
  };

  const _onPressBtn = () => {
    if (title.length > 0) {
      dispatch(addTask(title));
      setTile("");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput value={title} onChangeText={_onChangeText} />
      </View>
      <Button onPress={_onPressBtn} title="Ajouter" color="#841584" />
    </View>
  );
};

const styles = StyleSheet.create({
  containerInput: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 4,
    paddingLeft: 10,
    width: "75%",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
});

export default TaskForm;

import React from "react";
import { FlatList } from "react-native";
import TaskTile from "./TaskTile";

export default function TaskList({ tasks, onChangeStatus, onDeleteTask }) {
  const _renderItem = ({ item }) => (
    <TaskTile
      id={item.id}
      title={item.title}
      completed={item.completed}
      onChangeStatus={onChangeStatus}
      onDeleteTask={onDeleteTask}
    ></TaskTile>
  );

  return (
    <FlatList
      data={tasks}
      renderItem={_renderItem}
      keyExtractor={(item) => item.id}
    />
  );
}

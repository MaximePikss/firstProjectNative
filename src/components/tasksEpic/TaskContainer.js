import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import CounterContainer from "./CounterContainer";
import FloatingButton from "../shared/floatingButton/FloatingButton";
import { useSelector } from "react-redux";
import { getTasks } from "../../redux/Selectors";

const TaskContainer = (props) => {
  const [tasks, setTasks] = useState([
    { id: new Date().getTime(), title: "Nouvelles tâches", completed: false },
  ]);

  const allTasks = useSelector(getTasks);
  console.log("ALL TASKS", allTasks);

  const [isFormOpened, setIsFormOpened] = useState(false);

  const onChangeStatus = (id) => {
    let newTasks = [];

    tasks.forEach((task) => {
      if (task.id === id) {
        newTasks.push({
          id: id,
          title: task.title,
          completed: !task.completed,
        });
      } else {
        newTasks.push(task);
      }
    });

    setTasks(newTasks);
  };

  const onDeleteTask = (id) => {
    let newTasks = [];

    tasks.forEach((task) => {
      if (task.id !== id) {
        newTasks.push(task);
      }
    });
    setTasks(newTasks);
  };

  const getTasksCompleted = () => {
    let counter = 0;

    tasks.forEach((task) => {
      if (task.completed) {
        counter++;
      }
    });

    return counter;
  };
  const toggleForm = () => {
    setIsFormOpened(!isFormOpened);
  };

  return (
    <View style={styles.container}>
      {isFormOpened && <TaskForm />}
      <CounterContainer
        nbTasks={tasks.length}
        nbTasksCompleted={() => getTasksCompleted()}
      />
      <TaskList
        tasks={tasks}
        onChangeStatus={onChangeStatus}
        onDeleteTask={onDeleteTask}
      />
      <FloatingButton toggleForm={toggleForm} isFormOpened={isFormOpened} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
});
export default TaskContainer;

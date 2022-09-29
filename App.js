import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

import Task from "./components/Task";
import { FAB } from "react-native-paper";
//import { text } from "express";
//import { set } from "express/lib/response";
export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const AddTask = () => {
    setTaskItems([...taskItems, task]);
    setTask(null);
  };
  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.task}>
          <Text style={styles.sectiontitle}>Today's tasks</Text>
          <View style={styles.items}>
            {taskItems.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => completeTask(index)}
                >
                  <Task text={item} />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        <View flexDirection="row">
          <TextInput
            style={styles.input}
            placeholder="write the task"
            value={task}
            onChangeText={(text) => setTask(text)}
          />
          <TouchableOpacity onPress={() => AddTask()}>
            {/* </KeyboardAvoidingView> */}
            <FAB style={styles.add} small icon="plus" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
  },
  task: {
    paddingTop: 100,
    paddingHorizontal: 25,
    alignItems: "center",
  },
  sectiontitle: {
    fontWeight: "bold",
    fontSize: 28,
    marginBottom: 20,
  },
  items: {
    marginTop: 30,
  },
  input: {
    backgroundColor: "white",
    width: 150,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 60,
    marginRight: 20,
    marginLeft: 60,
  },
  add: {
    width: 40,
    height: 40,
    alignItems: "center",
    borderRadius: 60,
    flexDirection: "row",
  },
});

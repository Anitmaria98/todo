import React from "react";
import { View, Text, StyleSheet } from "react-native";
const Task = (props) => {
  return (
    <View style={styles.items}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}> {props.text}</Text>
        <View style={styles.circular}></View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  items: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    flexDirection: "row",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  itemText: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
  square: {
    width: 25,
    height: 25,
    backgroundColor: "#CCE1F2",
    opacity: 0.5,
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: "green",
    borderWidth: 2,
    borderRadius: 3,
    marginLeft: 15,
  },
});
export default Task;

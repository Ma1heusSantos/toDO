import Header from "@/components/header";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Colors from "@/constants/Colors";
import { Input } from "@/components/input";
import { useState } from "react";
import { Button } from "@/components/button";
import { TaskItem } from "@/components/taskItem";
import { TaskItemCompleted } from "@/components/taskitemCompleted";

export default function Index() {
  const [task, setTask] = useState("");
  const [taskGroup, setTaskGroup] = useState<string[]>([]);
  const [checked, setChecked] = useState<string[]>([]);

  const handleTaskAdd = () => {
    setTaskGroup([...taskGroup, task]);
    setTask(" ");
  };

  const handleTaskremove = (name: string) => {
    setTaskGroup((item) => taskGroup.filter((item) => item !== name));
  };

  const handleTaskCompleted = (name: string) => {
    setTaskGroup((item) => taskGroup.filter((item) => item !== name));
    setChecked([...checked, name]);
  };

  const handleTaskUnCompleted = (name: string) => {
    setChecked((item) => checked.filter((item) => item !== name));
    setTaskGroup([...taskGroup, name]);
  };

  const handleTaskCompleteremove = (name: string) => {
    setChecked((item) => checked.filter((item) => item !== name));
  };

  return (
    <View style={styles.wrapper}>
      <Header />
      <View style={styles.body}>
        <View style={styles.container}>
          <Input
            placeholder="Adicione um nova Tarefa"
            value={task}
            onChangeText={setTask}
          />
          <Button onPress={handleTaskAdd} />
        </View>
        <View style={styles.infoBody}>
          <Text style={styles.taskInfo}>Tarefas {taskGroup.length}</Text>
          <Text style={styles.completedInfo}>Completas {checked.length}</Text>
        </View>

        <FlatList
          data={taskGroup}
          renderItem={({ item }) => (
            <TaskItem
              text={item}
              onPressRemove={() => {
                handleTaskremove(item);
              }}
              onPressCompleted={() => {
                handleTaskCompleted(item);
              }}
            />
          )}
          keyExtractor={(item) => item}
        />

        <FlatList
          data={checked}
          renderItem={({ item }) => (
            <TaskItemCompleted
              text={item}
              onPressRemove={() => {
                handleTaskCompleteremove(item);
              }}
              onPressCompleted={() => {
                handleTaskUnCompleted(item);
              }}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  body: {
    flex: 1,
    backgroundColor: Colors.light.blackBody,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: -30,
    marginHorizontal: 24,
    gap: 7,
  },
  infoBody: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 24,
  },
  taskInfo: {
    color: Colors.light.blue,
    fontWeight: "bold",
    fontSize: 17,
  },
  completedInfo: {
    color: Colors.light.purple,
    fontWeight: "bold",
    fontSize: 17,
  },
});

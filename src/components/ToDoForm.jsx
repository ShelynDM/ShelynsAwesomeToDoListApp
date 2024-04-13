import React from 'react';
import {
  TextInput,
  StyleSheet,
  Button,
  Pressable,
  View,
  Text,
} from 'react-native';

export default function ToDoForm({addTask}) {
  const [taskText, setTaskText] = React.useState('');
  const [tasks, setTasks] = React.useState([]);

  React.useEffect(() => {
    const taskData = require('../data/task.json');
    setTasks(taskData);
  }, []);

  const handleAddRandomTask = () => {
    // get the random task from the tasks array
    const taskData = require('../data/task.json');
    const randomIndex = Math.floor(Math.random() * taskData.tasks.length);
    const randomTask = taskData.tasks[randomIndex];

    // change the value of the input field to the random task
    setTaskText(randomTask);
  };

  return (
    <>
      <View style={styles.form}>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Add a new task..."
            onChangeText={text => setTaskText(text)}
            value={taskText}
          />
        </View>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <Pressable>
            <Button
              title="Add Task"
              onPress={() => {
                addTask(taskText);
                setTaskText('');
              }}
            />
          </Pressable>
          <Pressable>
            <Button
              title="Generate Random Task"
              onPress={handleAddRandomTask}
            />
          </Pressable>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});

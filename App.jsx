/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';
import {useState} from 'react';

function App() {
  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);
  const addTask = task => {
    // Check if the task is already in the list and alert the user if true
    if (tasks.includes(task)) {
      alert('Task already exists');
      // If the input task is empty alert the user
    } else if (task === '') {
      alert('Please enter a task');
    } else {
      setTasks([...tasks, task]);
      alert('Task successfully added');
    }
  };

  return (
    <SafeAreaView>
      <ToDoForm addTask={addTask} />
      <Text style={styles.task}>My Tasks</Text>
      <ToDoList tasks={tasks} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    alignSelf: 'center',
  },
});

export default App;

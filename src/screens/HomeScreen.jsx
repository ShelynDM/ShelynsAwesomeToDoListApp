/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import {Button, Pressable, SafeAreaView, StyleSheet, Text} from 'react-native';
import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';
import {useState} from 'react';
import MainLayout from '../layouts/MainLayout';

function App({navigation}) {
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
    <MainLayout>
      <SafeAreaView>
        <Pressable>
          <Button
            title="Go to About"
            onPress={() => navigation.navigate('About')}
          />
        </Pressable>
        <ToDoForm addTask={addTask} />
        <Text style={styles.task}>My Tasks</Text>
        <ToDoList tasks={tasks} />
      </SafeAreaView>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    alignSelf: 'center',
  },
  button: {
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    height: 40,
    width: 100,
    fontColor: 'white',
    onPress: {
      backgroundColor: 'blue',
    },
  },
});

export default App;

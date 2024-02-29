import React from 'react';
import {
  TextInput,
  StyleSheet,
  Button,
  Pressable,
  View,
  Text,
} from 'react-native';

function ToDoForm({addTask}) {
  const [taskText, setTaskText] = React.useState('');
  return (
    <>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task..."
          onChangeText={text => setTaskText(text)}
          value={taskText}
        />
        <Pressable>
          <Button
            title="Add Task"
            onPress={() => {
              addTask(taskText);
              setTaskText('');
            }}
          />
        </Pressable>
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

export default ToDoForm;

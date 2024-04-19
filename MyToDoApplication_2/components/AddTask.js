// components/AddTask.js (update for editing)
// Receive initial content as prop and modify button text and handling
import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTask, editTask } from '../actions/taskAction';

export default function AddTask({ initialContent, taskId, onEditCancel }) {
  const [text, setText] = useState(initialContent || '');
  const dispatch = useDispatch();

  const handleTaskAction = () => {
    if (!text.trim()) return;
    if (taskId) {
      dispatch(editTask(taskId, text));
      onEditCancel(); // Clear input and exit edit mode
    } else {
      dispatch(addTask({ id: Date.now().toString(), content: text }));
      setText(''); // Clear input after adding task
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Add new task..."
        value={text}
        onChangeText={setText}
      />
      <Button title={taskId ? 'Save' : 'Add Task'} onPress={handleTaskAction} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    width: '70%',
    marginRight: 10,
  },
});

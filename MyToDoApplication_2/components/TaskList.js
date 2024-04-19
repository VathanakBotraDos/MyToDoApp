// components/TaskList.js
import React, { useState } from 'react';
import { View, Button, FlatList, StyleSheet, Text } from 'react-native'; // Correct import for Text
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from '../actions/taskAction';
import AddTask from './AddTask';

export default function TaskList() {
  const tasks = useSelector(state => state.tasks.tasks);
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(null);

  const handleToggleTask = taskId => {
    dispatch(toggleTask(taskId));
  };

  const handleEditTask = taskId => {
    setEditMode(taskId);
  };

  const handleEditCancel = () => {
    setEditMode(null);
  };

  return (
    <FlatList
      data={tasks}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <View style={[styles.taskItem, item.completed && styles.completedTask]}>
          {editMode === item.id ? (
            <AddTask
              initialContent={item.content}
              taskId={item.id}
              onEditCancel={handleEditCancel}
            />
          ) : (
            <View>
              <Text>{item.content}</Text>
              <Button
                title={item.completed ? 'Completed' : 'Mark Completed'}
                onPress={() => handleToggleTask(item.id)}
              />
              <Button title="Edit" onPress={() => handleEditTask(item.id)} />
              <Button title="Delete" onPress={() => dispatch(deleteTask(item.id))} />
            </View>
          )}
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
    borderWidth: 1,
    borderColor: '#cccccc',
    padding: 10,
  },
  completedTask: {
    backgroundColor: 'lightgreen',
  },
});

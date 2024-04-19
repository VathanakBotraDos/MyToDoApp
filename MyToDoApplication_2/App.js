// App.js
import React from 'react';
import { StyleSheet, View, StatusBar, Image } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './store/ConfigureStore';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Image
          style={styles.logo}
          source={require('./assets/icon.png')}
        />
        <AddTask />
        <TaskList />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: 'yellow',
  },
  logo: {
    marginEnd: 300,
    width: 60,
    height: 60,
    alignSelf: 'center',
  },
});
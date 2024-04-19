// store/configureStore.js
import { createStore, combineReducers } from 'redux';
import tasksReducer from '../reducers/tasksReducers';

const rootReducer = combineReducers({
  tasks: tasksReducer,
});

const configureStore = () => createStore(rootReducer);

export default configureStore;
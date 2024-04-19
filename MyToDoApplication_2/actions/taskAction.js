// actions/taskActions.js
export const addTask = task => ({
    type: 'ADD_TASK',
    payload: task
  });
 
  export const deleteTask = taskId => ({
    type: 'DELETE_TASK',
    payload: taskId
  });

  export const toggleTask = taskId => ({
    type: 'TOGGLE_TASK',
    payload: taskId
  });

  export const editTask = (taskId, newContent) => ({
    type: 'EDIT_TASK',
    payload: { taskId, newContent }
  });

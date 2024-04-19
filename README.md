# MyToDoApp

Use Implementing Redux program in the Discussion and also Redux assignment in the Assignment and enhance and improve it with the following features

1. Persisting Tasks
Save tasks to local storage or a remote database so that tasks are not lost when the app reloads.

Middleware/Async Actions: Use middleware like Redux Thunk or Redux Saga to handle side effects, such as saving tasks to AsyncStorage (React Native) or a remote database (e.g., Firebase).
Action & Reducer: Create actions to load tasks from storage when the app starts and save tasks whenever the task list changes. Your reducer may handle these actions to update the state accordingly.
2. Categorizing Tasks
Allow tasks to be categorized (e.g., personal, work) and enable filtering based on these categories.

Actions & Reducer Update: Introduce actions for adding a category to a task and filtering tasks by category. Update your tasksReducer to handle these new actions.
Component Enhancements: Add a way to assign categories to tasks in the AddTask component and a filter component to select which category of tasks to display.
3. Prioritizing Tasks
Let users set priorities for tasks (e.g., high, medium, low) and sort tasks based on priority.

Action & Reducer: Implement actions for setting a task's priority and sorting tasks by priority. The reducer will need to manage these aspects of the state.
UI Update: Update the task creation and list components to allow setting priorities and visually distinguish tasks by priority.

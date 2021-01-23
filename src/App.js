import React from 'react';
import TodoList from './Components/TodoList';
import AddTodo from './Components/AddTodo';
import './App.css';

function App() {
  return (
    <div>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
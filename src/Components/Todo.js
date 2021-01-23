import React from 'react';
import { connect, useDispatch } from 'react-redux';

import { deleteTodo, completeTodo } from '../redux/actions/todosActions';

import EditTodo from './EditTodo';

const Todo = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <input type='checkbox' className="check"
      onClick={() => dispatch(completeTodo(task.id))} />
      <p
      style={{ textDecorationLine: task.isCompleted ? 'line-through' : 'none' }}>
      {task.text}
      </p>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '60px',
        }}
      >
        <EditTodo task={task} />
        <button className="btn" onClick={() => dispatch(deleteTodo(task.id))}>
          X
        </button>
      </div>
    </li>
  );
};

export default connect()(Todo);
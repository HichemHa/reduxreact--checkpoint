import React, { useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../redux/actions/todosActions';

const AddTodo = () => {
    const [input, setInput] = useState('');
    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();
  
    let id = tasks.length + 1;
    return (
      <div className="Input-Container">
        <div className="add-element">
          <h1>TO-DO APP</h1>
          <h4>Add New To-Do</h4>
          <div>
            <input
              type="text"
              id="myInput"
              placeholder="Enter New Task..."
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <button
              className="add-Btn"
              onClick={() => {
                input.trim()
                  ? dispatch(addTodo({ id, text: input, complete: false }))
                  : alert('Please enter a valid text');
                setInput('');
              }}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default connect()(AddTodo);
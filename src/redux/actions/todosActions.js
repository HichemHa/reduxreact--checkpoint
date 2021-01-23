import {
    ADD_TODO,
    DELETE_TODO,
    COMPLETE_TODO,
    EDIT_TODO,
    ALL_TODO,
    DONE_TODO,
    NOTDONE_TODO,
  } from '../constants/actionTypes';
  
  export const addTodo = (payload) => {
    return { type: ADD_TODO, payload };
  };
  
  export const deleteTodo = (payload) => {
    return { type: DELETE_TODO, payload };
  };
  
  export const completeTodo = (payload) => {
    return { type: COMPLETE_TODO, payload };
  };
  
  export const editTodo = (payload) => {
    return { type: EDIT_TODO, payload };
  };
  export const showAll = () => {
    return { type: ALL_TODO}
  }
  export const showDone = () => {
    return { type:DONE_TODO}
  }
  export const showNotdone = () => {
    return {type:NOTDONE_TODO}
  }
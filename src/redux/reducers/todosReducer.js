import {
    ADD_TODO,
    DELETE_TODO,
    COMPLETE_TODO,
    EDIT_TODO,
    ALL_TODO,
    DONE_TODO,
    NOTDONE_TODO,
} from '../constants/actionTypes';


const initialState = {
    tasks: [
        { text: 'Learning React Redux', id: 0, isCompleted: false },
        { text: 'Redux Checkpoint', id: 1, isCompleted: false },
        { text: 'Learning API', id: 2, isCompleted: false },
    ],
    all: true,
    isdone: false,
    notdone: false
};
const todos = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                tasks: state.tasks.concat(action.payload),
            };
        case DELETE_TODO:
            return {
                ...state,
                tasks: state.tasks.filter((el, i) => el.id !== action.payload),
            };
        case COMPLETE_TODO:
            return {
                ...state,
                tasks: state.tasks.map((el, i) =>
                    el.id === action.payload ? { ...el, isCompleted: !el.isCompleted } : el
                ),
            };
        case EDIT_TODO:
            return {
                ...state,
                tasks: state.tasks.map((el, i) =>
                    el.id === action.payload.id
                        ? { ...el, text: action.payload.text, complete: false }
                        : el
                ),
            };
        case ALL_TODO:
            return {
                ...state, all: true, isdone: false, notdone: false
            };
        case DONE_TODO:    
            return {
                ...state, isdone: true, all: false, notdone: false
            }
        case NOTDONE_TODO:
            return {
                ...state, isdone: false, all: false, notdone: true
            }
        default:
            return state;
    }
};

export default todos;
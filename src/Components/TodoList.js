import React from 'react';
import { connect, useSelector,useDispatch } from 'react-redux';
import { showAll, showDone, showNotdone } from '../redux/actions/todosActions';
import Todo from './Todo';

const TodoList = () => {
  const tasks = useSelector((state) => state.tasks);
  const all = useSelector((state) => state.all);
  const isdone = useSelector((state) => state.isdone);
  const notdone = useSelector((state) => state.notdone);
  const dispatch = useDispatch()
  const handelAll=() => {
    dispatch(showAll())
  }
  const handelIsdone =()=> {
    dispatch(showDone())
  } 
  const handelNotdone=() => {
    dispatch(showNotdone())
  }
  return (
    <div className="Container">
      <button className="add-Btn" style={{ backgroundColor: all ? '#38a14f' : 'grey' }} onClick={handelAll}>All</button>
      <button className="add-Btn" style={{ backgroundColor: isdone ? '#38a14f' : 'grey' }} onClick={handelIsdone}>Done</button>
      <button className="add-Btn" style={{ backgroundColor: notdone ? '#38a14f' : 'grey' }} onClick={handelNotdone}>Not Done</button>
      <div>
      <ul className="myUl">
          {all === true && tasks.map((el, i) => (
            <Todo task={el} key={i} />
          ))}
        </ul>
      </div>
      <div>
        <ul className="myUl">
          {isdone === true && tasks.filter((el) => el.isCompleted===true ).map((el, i) => (
            <Todo task={el} key={i} />
          ))}
        </ul>
      </div>
      <div>
        <ul className="myUl">
          {notdone === true && tasks.filter((el) => el.isCompleted===false).map((el, i) => (
            <Todo task={el} key={i} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default connect()(TodoList);
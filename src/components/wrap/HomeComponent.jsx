import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { add, remove } from "../../store";

export default function HomeComponent() {

    const [ todo, setTodo ] = React.useState("");
    
    // redux 상태 불러오기
    const todos = useSelector(state => state);
    const todoDispatch = useDispatch();
    
    // todo 입력 이벤트
    const onChangeTodo = (e) => {
        setTodo(e.target.value);
    };

    // todo submit 이벤트
    const onSubmitTodo = (e) => {
        e.preventDefault();
        todoDispatch(add(todo));
    };

    // todo remove 이벤트
    const onClickRemove = (e) => {
        todoDispatch(remove(e.target.parentNode.id));
    };

  return (
    <div id="home">
        <div className="container">
            <div className="gap">
                <div className="content">
                    <form id="todoForm" onSubmit={onSubmitTodo}>
                        <label htmlFor="userTodo">What To Do ?</label>
                        <input type="text" id='userTodo' name='userTodo' autoComplete='off' onChange={onChangeTodo} />
                        <button type="submit">ADD</button>
                    </form>
                    <ul className="todo__list">
                        {
                            todos.map((item, idx) => {
                                return(
                                    <li key={idx} id={item.id}>
                                        <span>{item.text}</span>
                                        <button type='button' onClick={onClickRemove}>REMOVE</button>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

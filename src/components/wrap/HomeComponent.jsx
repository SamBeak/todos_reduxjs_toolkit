import React from 'react';

export default function HomeComponent() {

    const [ todo, setTodo ] = React.useState("");
    
    // todo 입력 이벤트
    const onChangeTodo = (e) => {
        setTodo(e.target.value);
    };

    // todo submit 이벤트
    const onSubmitTodo = (e) => {
        e.preventDefault();
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
                    <ul className="todo__list"></ul>
                </div>
            </div>
        </div>
    </div>
  )
}

import React from 'react';

export default function HomeComponent() {

  return (
    <div id="home">
        <div className="container">
            <div className="gap">
                <div className="content">
                    <form id="todoForm">
                        <label htmlFor="userTodo">What To Do ?</label>
                        <input type="text" id='userTodo' name='userTodo' autoComplete='off' />
                        <button type="submit">ADD</button>
                    </form>
                    <ul className="todo__list"></ul>
                </div>
            </div>
        </div>
    </div>
  )
}

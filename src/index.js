/**
 * Created by songyechun on 17/3/21.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import ToDoBox from './ToDoBox/ToDoBox';
import './index.css'

import TodoStore from './todoStore/todoStore';

const todoStore = new TodoStore();
todoStore.addTodo('吃饭');
todoStore.addTodo('睡觉');
todoStore.addTodo('打豆豆');

ReactDOM.render(
	<ToDoBox todoStore={todoStore} />,
    document.getElementById('root')
);

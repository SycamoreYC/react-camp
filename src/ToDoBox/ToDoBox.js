/**
 * Created by songyechun on 17/3/20.
 */
import React, { Component } from 'react';

import './_ToDoBox.css';

import ToDoList from './ToDoList/ToDoList';
import AddToDo from './AddToDo/AddToDo';
import SelectBtns from './SelectBtns/SelectBtns';

import { observer } from 'mobx-react';

@observer
class ToDoBox extends Component {

    addHandle(item) {
		this.props.todoStore.addTodo(item);
	};

    deleteHandle(index) {
		this.props.todoStore.deleteToDo(index);
	}

	operateItemsHandle(operate) {
    	this.props.todoStore.operateToDos(operate);
	}

	showBoxHandle(index, state) {
    	this.props.todoStore.showTodoBox(index, state);
	}

    render() {
        const { todoStore } = this.props;
		return (
            <div className="toDoBox-wrap" onClick={() => this.showBoxHandle()}>
                <h1>To Do List</h1>
                <ToDoList toDoItems={todoStore.toDoData}
						  addEvent={this.addHandle.bind(this)}
						  showBoxEvent={this.showBoxHandle.bind(this)}
						  deleteEvent={this.deleteHandle.bind(this)}/>
                <AddToDo addEvent={this.addHandle.bind(this)} />
                <SelectBtns operateEvent={this.operateItemsHandle.bind(this)}/>
            </div>
        );
    }
}

export default ToDoBox;
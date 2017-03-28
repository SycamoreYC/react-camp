/**
 * Created by songyechun on 17/3/20.
 */
import React, { Component } from 'react';

import './_ToDoBox.css';

import ToDoList from './ToDoList/ToDoList';
import AddToDo from './AddToDo/AddToDo';
import SelectBtns from './SelectBtns/SelectBtns';
import Confirm from './Confirm/Confirm';

import { observer } from 'mobx-react';

@observer
class ToDoBox extends Component {

	renderConfirm() {
		if (this.props.todoStore.showConfirm) {
			return (
				<Confirm todoStore={this.props.todoStore} />
			)
		}
	}
    render() {
        const { todoStore } = this.props;
		return (
            <div className="toDoBox-wrap" onClickCapture={() => todoStore.operateBoxToggle(false)}>
                <h1>To Do List</h1>
				<ToDoList todoStore={todoStore}/>
                <AddToDo todoStore={todoStore} />
                <SelectBtns todoStore={todoStore} />
				{this.renderConfirm()}
            </div>
        );
    }
}

export default ToDoBox;
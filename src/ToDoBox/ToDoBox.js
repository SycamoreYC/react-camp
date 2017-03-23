/**
 * Created by songyechun on 17/3/20.
 */
import React, { Component } from 'react';
import _ from 'lodash';

import './_ToDoBox.css';

import ToDoList from './ToDoList/ToDoList';
import AddToDo from './AddToDo/AddToDo';
import SelectBtns from './SelectBtns/SelectBtns';

const toDos = [
    {
        content: '写代码',
        isCompleted: true
    },
    {
        content: '看书',
        isCompleted: false

    },
    {
        content: '洗衣服',
        isCompleted: false

    }

];
class ToDoBox extends Component {
    constructor() {
        super();
        this.state = {
            toDoData: toDos
        }
    }

    addHandle(item) {
        // this.state.toDoData.push({
			// content: item,
			// isCompleted: false
        // });
        const id = this.state.toDoData[this.state.toDoData.length - 1];
        const newToDoData = this.state.toDoData;
        newToDoData.push({
			content: item,
			isCompleted: false,
            id: id + 1
        });
        this.setState({
            toDos: newToDoData
        });
        // this.setState({toDos: [...this.state.toDoData, {
        //     content: item,
        //     isCompleted: false
        // }]})
    }

    saveTask(index, newContent) {
        // bug
		const toDoData = this.state.toDoData;
        toDoData[index].content = newContent;
        this.setState({
            toDoData: this.state.toDoData
        })
    }

    deleteTask(index) {
        // bug
		this.state.toDoData.splice(index, 1);
        this.setState({
            toDos: this.state.toDoData
        })
    }

    taskToggle(index) {
        const toDoData = this.state.toDoData;
		toDoData[index].isCompleted = !toDoData[index].isCompleted;
        this.setState({
            toDoData: toDoData
        })
    }

    operateAllTasksHandle(operate) {
        if (operate === 'change') {
            _.map(this.state.toDoData, item => {
                item.isCompleted = !item.isCompleted;
            });
        } else {
            _.map(this.state.toDoData, item => {
                item.isCompleted = operate;
            });
        }

        this.setState({
            toDos: this.state.toDoData
        })
    }

    render() {
        var toDoData = this.state.toDoData;
        return (
            <div className="toDoBox-wrap">
                <h1>To Do List</h1>
                <ToDoList toDoItems={toDoData} saveTask={this.saveTask.bind(this)} taskToggle={this.taskToggle.bind(this)} deleteTask={this.deleteTask.bind(this)}></ToDoList>
                <AddToDo  addEvent={this.addHandle.bind(this)}/>
                <SelectBtns operateAllTasksHandle={this.operateAllTasksHandle.bind(this)}></SelectBtns>
            </div>
        );
    }
}

export default ToDoBox;
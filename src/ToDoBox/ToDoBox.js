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
        this.state.toDoData.push({
            content: item,
            isCompleted: false
        });
        this.setState({toDos: this.state.toDoData})
    }

    saveTask(oldContent, newContent) {
        const editedTask = _.find(this.state.toDoData, item => item.content === oldContent);
        editedTask.content = newContent;
        this.setState({
            toDoData: this.state.toDoData
        })
    }

    deleteTask(task) {
        const targetItem = _.findIndex(this.state.toDoData, item => item.content === task.content);
        this.state.toDoData.splice(targetItem, 1);
        this.setState({
            toDos: this.state.toDoData
        })
    }

    taskToggle(task) {
        const targetToggle = _.find(this.state.toDoData, item => item.content === task.content);
        targetToggle.isCompleted = !targetToggle.isCompleted;
        this.setState({
            toDoData: this.state.toDoData
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
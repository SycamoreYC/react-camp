/**
 * Created by songyechun on 17/3/20.
 */
import React, { Component } from 'react';

import './_ToDoListItem.css';


class ToDoListItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isEditing: false
        }
    }

    renderActionSection() {
        if (this.state.isEditing) {
            return (
                <span className="toDoList-item-btn">
                    <button className="toDoList-item-btn-ok" onClick={this.onSave.bind(this)}>save</button>
                    <button className="toDoList-item-btn-del" onClick={this.onCancel.bind(this)}>cancel</button>
                </span>
            )
        }
        return (
            <span className="toDoList-item-btn">
                    <button className="toDoList-item-btn-ok" onClick={this.onEditing.bind(this)}>edit</button>
                    <button className="toDoList-item-btn-del" onClick={this.onDelete.bind(this)}>delete</button>
            </span>
        )
    }

    onCancel() {
        this.setState({
            isEditing: false
        })
    }

    onEditing() {
        this.setState({
            isEditing: true
        })
    }

    onSave(event) {
        event.preventDefault();
        const oldContent = this.props.todo.content;
        const newContent = this.refs.editInput.value;
        this.props.saveTask(oldContent, newContent);
        this.onCancel();
    }

    onDelete(event) {
        event.preventDefault();
        const targetTask = this.props.todo;
        this.props.deleteTask(targetTask);
    }



    renderTaskSection() {
        const taskStyle = {
            color: this.props.todo.isCompleted ? 'grey' : 'black',
            cursor: 'pointer'
        };

        if (this.state.isEditing) {
            return (
                <form className="toDoList-item-edit">
                    <input type="text" defaultValue={this.props.todo.content} ref="editInput"/>
                </form>
            )
        }
        if (!this.state.isEditing) {
            if (this.props.todo.isCompleted === false) {
                return (
                        <span className="toDoList-item-content" style={taskStyle}>
                            <input className="toDoList-item-checkbox"
                                   type="checkbox"
                                   onChange={this.onToggle.bind(this)}
                                   checked={this.props.todo.isCompleted}/>{this.props.todo.content}
                        </span>
                    )
            } else {
                return (
                        <span className="toDoList-item-content" style={taskStyle}>
                                <input className="toDoList-item-checkbox"
                                       type="checkbox"
                                       onChange={this.onToggle.bind(this)}
                                       checked={this.props.todo.isCompleted}/><strike>{this.props.todo.content}</strike>
                            </span>
                    )
            }

        }
    }

    onToggle() {
        this.props.taskToggle(this.props.todo)
    }

    render() {
        return (
            <li className="toDoList-item" key={this.props.index}>
                {this.renderTaskSection()}
                {this.renderActionSection()}
            </li>
        )
    }
}

export default ToDoListItem
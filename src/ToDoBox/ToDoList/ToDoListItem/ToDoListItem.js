/**
 * Created by songyechun on 17/3/20.
 */
import React, { Component } from 'react';

import './_ToDoListItem.css';
import ActionModal from './ActionModal/ActionModal';


class ToDoListItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            showModal: false
        }
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

    onDelete(event) {
        event.preventDefault();
		const targetIndex = this.props.index;
        this.props.deleteTask(targetIndex);
        this.renderModal(false);
    }
    renderActionIcon() {
        return (
            <i className="iconfont icon-bell toDoList-item-icon" onClick={() => this.renderModal(true)}></i>
        )
    }

    renderModal(state) {
        this.setState({
            showModal: state
        });
    }

    renderTaskSection() {
        const taskStyle = {
            color: this.props.todo.isCompleted ? 'grey' : 'black',
            cursor: 'pointer'
        };
        return (
            <span className="toDoList-item-content" style={taskStyle}>
                    <input className="toDoList-item-checkbox"
                           type="checkbox"
                           onChange={this.onToggle.bind(this)}
                           checked={this.props.todo.isCompleted}/>{ this.props.todo.isCompleted ?
                <strike>{this.props.todo.content}</strike> : <span>{this.props.todo.content}</span> }
                </span>
        )
    }

    onToggle() {
		this.props.taskToggle(this.props.index);
    }


    render() {
        const modalStyle = {
            display: this.state.showModal? 'block' : 'none'
        };
        return (
            <li className="toDoList-item" key={this.props.index}>
                {this.renderTaskSection()}
                {this.renderActionIcon()}
                <div style={modalStyle}>
                    <ActionModal closeModal={this.renderModal.bind(this)}
                                 onEditing={this.onEditing.bind(this)}
                                 onCancel={this.onCancel.bind(this)}
                                 saveTask={this.props.saveTask.bind(this)}
                                 onDelete={this.onDelete.bind(this)}
                                 isEditing={this.state.isEditing}
                                 index={this.props.index}
                                 todo={this.props.todo.content}/>
                </div>
            </li>
        )
    }
}

export default ToDoListItem
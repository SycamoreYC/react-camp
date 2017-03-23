/**
 * Created by songyechun on 17/3/20.
 */
import React, { Component } from 'react';
import { observer } from 'mobx-react';

import './_ToDoListItem.css';

@observer
class ToDoListItem extends Component {

	renderActionIcon() {
        if (this.props.todo.isCompleted) {
			return (
                <i className="iconfont icon-bell toDoList-item-icon" onClick={(e) => {
                	e.stopPropagation();
                	this.renderBox(this.props.index, this.props.todo.showBox)} }/>
			)
        }
    }

    renderBox(index, state) {
		this.props.showBoxEvent(index, !state);
	}

    renderTaskSection() {
        const taskStyle = {
            color: this.props.todo.isCompleted ? 'grey' : 'black',
        };
        return (
            <span className="toDoList-item-content" style={taskStyle}>
                    <input className="toDoList-item-checkbox"
                           type="checkbox"
                           onChange={this.onToggle}
                           checked={this.props.todo.isCompleted}/>{ this.props.todo.isCompleted ?
                <strike>{this.props.todo.content}</strike> : <span>{this.props.todo.content}</span> }
                </span>
        )
    }

    onToggle = () => {
		event.preventDefault();
		const todo = this.props.todo;
		todo.isCompleted = !todo.isCompleted;
    };

    onAdd() {
		this.props.addEvent(this.props.todo.content);
	}

	showDeleteConfirm = (state) => {
		this.props.todo.showConfirm = state;
	};

	onDelete() {
		const targetIndex = this.props.index;
		this.props.deleteEvent(targetIndex);
	}

    render() {
		const boxStyle = {
            display: this.props.todo.showBox? 'inline' : 'none',
        };
		console.log(this.props.todo.showConfirm);
		const confirmStyle = {
			display: this.props.todo.showConfirm? 'block' : 'none'
		};
		return (
            <li className="toDoList-item" key={this.props.index}>
                {this.renderTaskSection()}
                {this.renderActionIcon()}
                <span style={boxStyle} className="toDoList-item-btn-wrap">
                    <div className="toDoList-item-btn" onClick={() => {this.onAdd()}}>再来一遍</div>
                    <div className="toDoList-item-btn" onClick={() => {this.showDeleteConfirm(true)}}>删除</div>
                </span>
				<div style={confirmStyle} className="confirm-mask">
					<div className="confirm-wrap">
						<div>真的要删除吗？</div>
						<span className="confirm-btn" onClick={() => {this.onDelete()}}>是的</span>
						<span className="confirm-btn" onClick={() => {this.showDeleteConfirm(false)}}>还是不删了吧</span>
					</div>
				</div>
            </li>
        )
    }
}

export default ToDoListItem
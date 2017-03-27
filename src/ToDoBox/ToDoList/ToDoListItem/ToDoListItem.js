/**
 * Created by songyechun on 17/3/20.
 */
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';


import './_ToDoListItem.css';

@observer
class ToDoListItem extends Component {
	@observable confirm = false;
	renderActionIcon() {
        if (this.props.todo.isCompleted) {
			return (
                <i className="iconfont icon-bell toDoList-item-icon" onClick={() => {
                	this.renderBox(this.props.index)} }/>
			)
        }
    }

    renderBox(index) {
		this.props.showBoxEvent(index);
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

	showDeleteConfirm(state) {
		this.confirm = state;
	}

    renderDeleteConfirm() {
		if (this.confirm === true) {
    		return (
				<div className="confirm-mask">
					<div className="confirm-wrap">
						<div>真的要删除吗？</div>
						<span className="confirm-btn" onClick={() => {this.onDelete()}}>一定要删除!</span>
						<span className="confirm-btn confirm-btn-del" onClick={() => {
							this.showDeleteConfirm(false);
						}}>还是不删了吧 :(</span>
					</div>
				</div>
			)
		}
	}

	onDelete() {
		const targetIndex = this.props.index;
		this.props.deleteEvent(targetIndex);
		this.showDeleteConfirm(false);
	}

	onAdd() {
		this.props.addEvent(this.props.todo.content);
	}

    render() {
		const boxStyle = {
            display: this.props.todo.showBox? 'inline' : 'none',
        };
		return (
            <li className="toDoList-item" key={this.props.index}>
                {this.renderTaskSection()}
                {this.renderActionIcon()}
                <span style={boxStyle} className="toDoList-item-btn-wrap">
                    <div className="toDoList-item-btn toDoList-item-btn-again" onClick={() => {this.onAdd()}}><i className="iconfont icon-recover toDoList-item-btn－icon"/>再来一遍</div>
                    <div className="toDoList-item-btn toDoList-item-btn-del" onClick={() => {this.showDeleteConfirm(true)}}><i className="iconfont icon-trash toDoList-item-btn－icon"/>删除</div>
                </span>
				{this.renderDeleteConfirm()}
            </li>
        )
    }
}

export default ToDoListItem
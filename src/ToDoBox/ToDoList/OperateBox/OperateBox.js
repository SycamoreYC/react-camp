/**
 * Created by songyechun on 17/3/28.
 */
import React, { Component } from 'react';
import './_OperateBox.css';

class OperateBox extends Component {

	addAgain() {
		const itemIndex = this.props.todoStore.itemIndex;
		const item = this.props.todoStore.toDoData[itemIndex].content;
		this.props.todoStore.addTodo(item);
	}
	render() {
		const itemIndex = this.props.todoStore.itemIndex;
		const boxStyle = {
			top: itemIndex * 43 + 'px'
		};
		return (
			<span className="toDoList-item-btn-wrap" style={boxStyle}>
                    <div className="toDoList-item-btn toDoList-item-btn-again" onClick={this.addAgain.bind(this)}>
						<i className="iconfont icon-recover toDoList-item-btn－icon"/>再来一遍
					</div>
                    <div className="toDoList-item-btn toDoList-item-btn-del" onClick={() => {
						this.props.todoStore.showConfirmModal(true)
                    	}
                    }>
						<i className="iconfont icon-trash toDoList-item-btn－icon"/>删除
					</div>
			</span>
		)
	}
}

export default OperateBox
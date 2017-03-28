/**
 * Created by songyechun on 17/3/28.
 */
import React, { Component } from 'react';
import './_Confirm.css';

class Confirm extends Component {


	deleteConfirm(decision) {
		if (decision === true) {
			this.props.todoStore.deleteToDo(this.props.todoStore.itemIndex);
		}
		this.props.todoStore.showConfirmModal(false)
	}
	render() {
		return (
			<div className="confirm-mask">
				<div className="confirm-wrap">
					<div>真的要删除吗？</div>
					<span className="confirm-btn" onClick={this.deleteConfirm.bind(this,true)}>一定要删除!</span>
					<span className="confirm-btn confirm-btn-del" onClick={this.deleteConfirm.bind(this)}>还是不删了吧 :(</span>
				</div>
			</div>
		)

	}

}
export default Confirm;
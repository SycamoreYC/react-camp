/**
 * Created by songyechun on 17/3/21.
 */
import React, { Component } from 'react';
import './_ActionModal.css';

class ActionModal extends Component {

    renderBtns() {
        if (this.props.isEditing) {
            return (
                <span>
                    <div className="modal-btn" onClick={() => this.onSave(event)}>保存</div>
                    <div className="modal-btn" onClick={() => this.props.onCancel()}>取消编辑</div>
                </span>

            )
        }
        return (
            <span>
                <div className="modal-btn" onClick={() => this.props.onEditing()}>编辑</div>
                <div className="modal-btn" onClick={() => this.props.onDelete(event)}>删除</div>
                <div className="modal-btn" onClick={() => this.props.closeModal(false)}>确定</div>
            </span>
        )
    }
    onSave(event) {
        event.preventDefault();
        const oldIndex = this.props.index;
        const newContent = this.refs.editInput.value;
        newContent.trim() && this.props.saveTask(oldIndex, newContent);
        this.props.onCancel();
    }

    renderModalText() {
        if (this.props.isEditing) {
            return (
                <form className="modal-edit">
                    <input className="modal-edit-input" type="text" defaultValue={this.props.todo} ref="editInput"/>
                </form>
            )
        } else {
            return (
                <div>{this.props.todo}</div>
            )
        }
    }



    render() {
        return (
            <div className="modal-wrap">
                <div className="modal-block">
                    <div className="modal-text">
                        {this.renderModalText()}
                    </div>
                    <div className="modal-btns">
                        {this.renderBtns()}
                        <i className="iconfont icon-dele" onClick={() => this.props.closeModal(false)}></i>
                    </div>
                </div>
            </div>
        )
    }
}

export default ActionModal;
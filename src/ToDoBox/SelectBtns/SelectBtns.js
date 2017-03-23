/**
 * Created by songyechun on 17/3/21.
 */
import React, { Component } from 'react';
import './_selectBtns.css';

class SelectBtns extends Component {

    render() {
        return <div className="selectBtns-wrap">
            <div className="selectBtns" onClick={() => this.props.operateAllTasksHandle(true)}>全选</div>
            <div className="selectBtns-allUndo selectBtns" onClick={() => this.props.operateAllTasksHandle(false)}>全不选</div>
            <div className="selectBtns" onClick={() => this.props.operateAllTasksHandle('change')}>反选</div>
        </div>
    }
}

export default SelectBtns;
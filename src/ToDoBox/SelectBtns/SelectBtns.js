/**
 * Created by songyechun on 17/3/21.
 */
import React, { Component } from 'react';
import './_selectBtns.css';

class SelectBtns extends Component {
	test(event) {
        event.preventDefault();
        const value = event.target.value;
        this.props.todoStore.operateToDos(value);
	}

    render() {
        return <div className="selectBtns-wrap" onClick={this.test.bind(this)}>
            <button className="selectBtns" value='true'>全选</button>
            <button className="selectBtns-allUndo selectBtns" value='false'>全不选</button>
            <button className="selectBtns" value='change'>反选</button>
        </div>
    }
}

export default SelectBtns;
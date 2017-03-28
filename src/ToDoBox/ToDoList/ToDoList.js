/**
 * Created by songyechun on 17/3/20.
 */
import React, {Component} from 'react';
import { observer } from 'mobx-react';

import './_ToDoList.css';
import ToDoListItem from './ToDoListItem/ToDoListItem';
import OperateBox from './OperateBox/OperateBox';

@observer
class ToDoList extends Component {
    renderItem() {
        const itemArr = [];
        const todoStore = this.props.todoStore;
        todoStore.toDoData.forEach((item, index) => {
			itemArr.push(<ToDoListItem todo={item} key={index} index={index} todoStore={todoStore} />);
		});
        return itemArr
    };

    renderBox() {
        if (this.props.todoStore.operateBox) {
            return (
                <OperateBox todoStore={this.props.todoStore}/>
			)
        }
    }

    render() {
        return (
            <div className="toDoList-wrap">
                <ul className="toDoList-body">
                    {this.renderItem()}
                </ul>
                {this.renderBox()}
            </div>
        );
    }
}

export default ToDoList;
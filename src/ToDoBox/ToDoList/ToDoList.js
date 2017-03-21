/**
 * Created by songyechun on 17/3/20.
 */
import React, {Component} from 'react';
import './_ToDoList.css';

import _ from 'lodash';

import ToDoListItem from './ToDoListItem/ToDoListItem';

class ToDoList extends Component {
    renderItem() {
        const props = _.omit(this.props, 'toDoItems');
        return _.map(this.props.toDoItems, (item, index) => {
            // ... 为了不用每次将方法专门在toDoListItem上挂一次
            return <ToDoListItem todo={item} key={index} {...props}/>
        })
    };
    render() {

        return (
            <div className="toDoList-wrap">
                <ul className="toDoList-body">
                    {this.renderItem()}
                </ul>
            </div>
        );
    }
}

export default ToDoList;
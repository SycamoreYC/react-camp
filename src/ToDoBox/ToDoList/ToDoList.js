/**
 * Created by songyechun on 17/3/20.
 */
import React, {Component} from 'react';
import { observer } from 'mobx-react';
import _ from 'lodash';

import './_ToDoList.css';
import ToDoListItem from './ToDoListItem/ToDoListItem';


@observer
class ToDoList extends Component {
    renderItem() {
        const props = _.omit(this.props, 'toDoItems');
        const itemArr = [];
        this.props.toDoItems.forEach((item, index) => {
			itemArr.push(<ToDoListItem todo={item} key={index} index={index} {...props}/>);
		});
        return itemArr
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
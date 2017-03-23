/**
 * Created by songyechun on 17/3/20.
 */
import React, {Component} from 'react';
import './_AddToDo.css';
import { observer } from 'mobx-react';

@observer
class AddToDo extends Component {
    addItemClick(event) {
		event.preventDefault();
        const item = this.refs.createItem.value.trim();
		this.props.addEvent(item);
        this.refs.createItem.value = '';
    }


    render() {
		return (
            <div className="addToDo-wrap" >
                <input type="text" placeholder="What to do today?" className="addToDo-input" ref="createItem"/>
                <div className="addToDo-btn" onClick={() => this.addItemClick(event)}>添加</div>
            </div>
        )
    };
}

export default AddToDo;
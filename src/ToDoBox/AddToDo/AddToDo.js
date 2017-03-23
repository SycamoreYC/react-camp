/**
 * Created by songyechun on 17/3/20.
 */
import React, {Component} from 'react';
import './_AddToDo.css'

class AddToDo extends Component {

    addItemClick(event) {
        event.preventDefault();
        const item = this.refs.createItem.value.trim();
        if (item) {
			this.props.addEvent(item);
		}
        this.refs.createItem.value = '';
    }

    render() {

        return (
            <form className="addToDo-wrap" >
                <input type="text" placeholder="What to do today?" className="addToDo-input" ref="createItem"/>
                <div className="addToDo-btn" onClick={() => this.addItemClick(event)}>添加</div>
            </form>
        )
    };
}

export default AddToDo;
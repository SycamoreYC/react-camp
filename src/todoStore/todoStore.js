/**
 * Created by songyechun on 17/3/23.
 */
import { observable } from 'mobx';

export default class ObservableTodoStore {
	@observable toDoData = [];
	@observable operateBox = false;
	@observable itemIndex = null;
	@observable showConfirm = false;

	// add item
	addTodo(task) {
		if (task.trim()) {
			this.toDoData.push({
				content: task,
				isCompleted: false
			})
		}
	}

	// delete item
	deleteToDo(index) {
		this.toDoData.splice(index, 1);
	}

	// operate items
	operateToDos(operate) {
		if (operate === 'change') {
			this.toDoData.forEach(item => {
				item.isCompleted = !item.isCompleted;
			})
		} else {
			this.toDoData.forEach(item => {
				item.isCompleted = operate === 'true';
			});
		}
	}

	// show or hide box menu
	operateBoxToggle(index, state) {
		if (index || index === 0) {
			this.itemIndex = index;
		}
		this.operateBox = state;
	}

	// show or hide confirm modal
	showConfirmModal(state) {
		this.showConfirm = state;
	}
}







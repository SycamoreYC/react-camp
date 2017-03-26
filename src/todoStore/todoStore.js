/**
 * Created by songyechun on 17/3/23.
 */
import { observable } from 'mobx';

export default class ObservableTodoStore {
	@observable toDoData = [];

	// add item
	addTodo(task) {
		if (task.trim()) {
			this.toDoData.push({
				content: task,
				isCompleted: false,
				showBox: false
				// showConfirm: false
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

	// show handle box
	showTodoBox(index, state) {
		this.toDoData.forEach(item => {
			item.showBox = false;
		});
		if (index || index === 0) {
			this.toDoData[index].showBox = state;
		}
	}
}







/**
 * Created by songyechun on 17/3/23.
 */
import { observable } from 'mobx';

export default class ObservableTodoStore {
	@observable toDoData = [];

	// add item
	addTodo(task) {
		this.toDoData.push({
			content: task,
			isCompleted: false
		})
	}
}




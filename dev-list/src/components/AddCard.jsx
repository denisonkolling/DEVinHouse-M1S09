import { useState } from 'react';

function AddCard({onAddNewTask}) {

	const [taskText, setTaskText] = useState('');
	const [listTask, setListTask] = useState([]);

	const addNewTask = () => {
		const newTask = {
			id: listTask.length + 1,
			text: taskText,
			done: false,
		};
		onAddNewTask(newTask)
		setListTask([...listTask, newTask]);
		setTaskText('');
		// console.log(listTask)
	};

	return (
		<>
			<h1>{'\u2714'} DEV TODO LIST</h1>
			<div className="card">
				<input
					className="todo-input"
					placeholder="Write your task..."
					type="text"
					value={taskText}
					onChange={(e) => setTaskText(e.target.value)}
				/>
				<button onClick={addNewTask}>Add Task</button>
			</div>

			
		</>
	);
}

export default AddCard;

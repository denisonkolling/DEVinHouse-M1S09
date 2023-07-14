import { useState } from 'react';

function AddCard() {

	const [task, setTask] = useState('');
	const [listTask, setListTask] = useState([]);

	const addNewTask = () => {
		const newTask = {
			id: listTask.length + 1,
			text: task,
			done: false,
		};
		setListTask([...listTask, newTask]);
		setTask('');
		console.log(listTask)
	};

	return (
		<>
			<h1>{'\u2714'} DEV TODO LIST</h1>
			<div className="card">
				<input
					className="todo-input"
					placeholder="Write your task..."
					type="text"
					value={task}
					onChange={(e) => setTask(e.target.value)}
				/>
				<button onClick={addNewTask}>Add Task</button>
			</div>

			
		</>
	);
}

export default AddCard;

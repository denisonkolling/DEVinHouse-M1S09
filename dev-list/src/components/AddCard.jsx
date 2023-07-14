import { useState } from 'react';

function AddCard() {

	const [valueInput, setValueInput] = useState('');

	const addTask = () => {
		console.log(valueInput);
	};

	return (
		<>
			<h1>{'\u2714'} DEV TODO LIST</h1>
			<div className="card">
				<input
					className="todo-input"
					placeholder="Write your task..."
					type="text"
					onChange={(e) => setValueInput(e.target.value)}
				/>
				<button onClick={addTask}>Add Task</button>
			</div>

			
		</>
	);
}

export default AddCard;

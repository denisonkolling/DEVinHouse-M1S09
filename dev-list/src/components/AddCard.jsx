import { useState } from 'react';

function AddCard({ taskList }) {
  
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

			<div>
				<h1>Your Tasks List</h1>
				{taskList.map((p) => (
					<div key={p.id}>
						<h3>{p.text}</h3>
						<p>{'Ready?' + p.done == true ? 'Done' : 'Not Done'}</p>
					</div>
				))}
			</div>
		</>
	);
}

export default AddCard;

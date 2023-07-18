import React, { useState } from 'react';

const ListItem = ({ list, removeTask }) => {

	
	const [done, setDone] = useState(list.done);
	
	const endTask = (index) => {
			setDone(list[index].done = !list[index].done);
			console.log(list)
	};

	return (
		<div>
			<h1>Your Tasks List</h1>
			{list.map((task, index) => (
				<div className="task-list" key={task.id}>
					<h3>{task.text}</h3>
					<p>{task.done == true ? 'Completed!' : 'Not done!'}</p>
					<div>
						<button onClick={() => endTask(index)}>Finish</button>
						<button onClick={() => removeTask(task.id)}>Remove</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default ListItem;

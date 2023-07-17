import React, { useState } from 'react';

const ListItem = ({ list }) => {

	const [done, setDone] = useState();

	const endTask = (id) => {
    const index = list.findIndex((task) => task.id === id);
		setDone((list[index].done = !done));
	};

	const removeTask = (id) => {
    const index = list.findIndex((task) => task.id === id);
    list.splice(index,1)
	};

	return (
		<div>
			<h1>Your Tasks List</h1>
			{list.map((task) => (
				<div className="task-list" key={task.id}>
					<h3>{task.text}</h3>
					<p>{task.done == true ? 'Yes!' : 'Not done!'}</p>
					<div>
						<button onClick={() => endTask(task.id)}>Finish</button>
						<button onClick={() => removeTask(task.id)}>Remove</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default ListItem;

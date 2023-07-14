import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import AddCard from './components/AddCard';
import ListItem from './components/ListItem';

function App() {
	const [tasks, setTasks] = useState([[]]);

	const taskList = [
		{ id: 1, text: 'Create app login screen', done: false },
		{ id: 2, text: 'Create database instance Amazon RDS', done: true },
		{ id: 3, text: 'Create react components', done: true },
		{ id: 4, text: 'Import user data', done: false },
	];

	const addNewTask = () => {
		newId = taskList.length + 1;
		newText = 
    newDone =
			taskList.push[{ id: newId, text: newText, done: newDone }];
	};

	return (
		<>
			<AddCard taskList={taskList} />
			<ListItem taskList={taskList} />
		</>
	);
}

export default App;

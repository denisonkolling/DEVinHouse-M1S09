import { useState } from 'react';
import './App.css';
import AddCard from './components/AddCard';
import ListItem from './components/ListItem';

function App() {
	const [task, setTask] = useState('');
	
	const [listTask, setListTask] = useState([
		{ id: 1, text: 'Create app login screen', done: false },
		{ id: 2, text: 'Create database instance', done: true },
		{ id: 3, text: 'Create react components', done: true },
		{ id: 4, text: 'Import user data', done: false },
	]);

	
	return (
		<>
			<AddCard />
			<ListItem taskList={listTask} />
		</>
	);
}

export default App;

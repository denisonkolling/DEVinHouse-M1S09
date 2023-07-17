import { useState } from 'react';
import './App.css';
import AddCard from './components/AddCard';
import ListItem from './components/ListItem';

function App() {

	const [list, setList] = useState([]);

	function handleAddTask(task){
		let newList = [...list]
		newList.push(task)
		setList(newList)
	}

	const removeTask = (id) => {
    const newList = list.filter((task) => task.id != id);
		setList(newList)
	};
	
	return (
		<>
			<AddCard onAddNewTask={handleAddTask}/>
			<ListItem list={list} removeTask={removeTask}/>
		</>
	);
}

export default App;

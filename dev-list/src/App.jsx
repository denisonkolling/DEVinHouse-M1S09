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
		// console.log(setList)
	}
	
	return (
		<>
			<AddCard onAddNewTask={handleAddTask}/>
			<ListItem list={list} />
		</>
	);
}

export default App;

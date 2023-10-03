import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("")
	const [todos, setTodos] = useState([])
	
	const deleteTask = (id)=>{
		let newArray= todos.filter((item, index) => index !== id);
    setTodos(newArray);
	}
	return (
		<div className="container">
		  <h1>My To-Do List</h1>
		  <ul>
			<li>
			  <input
				type="text"
				onChange={(e) => setInputValue(e.target.value)}
				value={inputValue}
				onKeyDown={(e) => {
				  if (e.key === "Enter") {
					setTodos(todos.concat(inputValue));
					setInputValue("");
				  }
				}}
				placeholder="Ingresa la tarea"
			  />
			</li>
			{todos.map((item, index) => (
			  <li key={index} onClick={() => deleteTask(index)}>
				{item}
			  </li>
			))}
		  </ul>
		</div>
	  );
	};

export default Home;

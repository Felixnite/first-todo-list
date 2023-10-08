import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("")
	const [todos, setTodos] = useState([])


	const deleteTask = (id) => {
		let newArray = todos.filter((item, index) => index !== id);
		setTodos(newArray);
	}



	return (
		<div className="container">
			<h1> My To-Do List </h1>
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
					<li key={index} className="task-item">
						<span>
							{item}
							<i className="fas fa-trash" onClick={() => deleteTask(index)}></i>
							
						</span>
					</li>

				))}


			</ul>
			<p>
			{todos.length > 0 ? `There are ${todos.length} tasks` : 'There are no tasks'}
			</p>

		</div>
	);
};

export default Home;

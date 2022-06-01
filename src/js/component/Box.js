import React, { useState } from "react";
import { Counter } from "./Counter";
import { InputRow } from "./InputRow";
import { List } from "./List";

export const Box = () => {
	const [newTask, setNewTask] = useState("");
	const [listOfTasks, setListOfTasks] = useState([
		"Make the Bed",
		"Wash my Hands",
		"Eat",
		"Walk the dog",
	]);

	return (
		<div className="container w-100 d-flex flex-column">
			<InputRow
				text="What needs to be done"
				value={newTask}
				setter={setNewTask}
				setterList={setListOfTasks}
			/>
			{listOfTasks.length === 0 ? (
				<p>{`No tasks, add a task`}</p>
			) : (
				<List list={listOfTasks} setterList={setListOfTasks} />
			)}
			<Counter list={listOfTasks} />
		</div>
	);
};

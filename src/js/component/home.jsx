import React from "react";
import { Box } from "./Box";
import { Tittle } from "./Tittle";

//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div className="d-flex flex-column justify-content-center align-middle">
			<Tittle text="To-dos" />
			<Box />
		</div>
	);
};

export default Home;

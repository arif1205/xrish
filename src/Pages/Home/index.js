import React from "react";
import Navbar from "../../Common/Navbar";
import Banner from "./Banner";
import Trending from "./Trending";

const Home = () => {
	return (
		<>
			<Navbar />
			<Banner />
			<Trending />
		</>
	);
};

export default Home;

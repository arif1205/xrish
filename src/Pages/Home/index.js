import React from "react";
import Navbar from "../../Common/Navbar";
import About from "./About";
import Banner from "./Banner";
import Reviews from "./Reviews";
import Trending from "./Trending";
import Footer from "../../Common/Footer";
// hooks
import useScrollTop from "../../Hooks/useScrollTop";

const Home = () => {
	useScrollTop();

	return (
		<>
			<Navbar />
			<Banner />
			<Trending />
			<Reviews />
			<About />
			<Footer />
		</>
	);
};

export default Home;

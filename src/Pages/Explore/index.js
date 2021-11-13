import React from "react";
import Navbar from "../../Common/Navbar";
import Footer from "../../Common/Footer";
import SectionBanner from "../../Common/SectionBanner";
import Products from "./Products";
import useScrollTop from "../../Hooks/useScrollTop";

const Explore = () => {
	useScrollTop();

	return (
		<>
			<Navbar />
			<SectionBanner title='Shop' />
			<Products />
			<Footer />
		</>
	);
};

export default Explore;

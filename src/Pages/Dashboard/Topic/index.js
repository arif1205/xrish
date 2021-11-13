import React from "react";
import { useParams } from "react-router";
import Myorders from "./Myorders";
import Pay from "./Pay";
import Review from "./Review";
import ManageAllOrders from "./ManageAllOrders";
import AddProduct from "./AddProduct";
import MakeAdmin from "./MakeAdmin";
import ManageProduct from "./ManageProduct";

const Topic = () => {
	const { topicId } = useParams();

	const showComponent = () => {
		if (topicId === "pay") return <Pay />;
		else if (topicId === "myorders") return <Myorders />;
		else if (topicId === "review") return <Review />;
		else if (topicId === "manageallorders") return <ManageAllOrders />;
		else if (topicId === "addproduct") return <AddProduct />;
		else if (topicId === "makeadmin") return <MakeAdmin />;
		else if (topicId === "manageproduct") return <ManageProduct />;
	};

	return <div>{showComponent()}</div>;
};

export default Topic;

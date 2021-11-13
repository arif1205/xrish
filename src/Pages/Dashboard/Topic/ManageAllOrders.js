import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Wrapper } from "./Topic.styles";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	"&:nth-of-type(odd)": {
		backgroundColor: theme.palette.action.hover,
	},
	// hide last border
	"&:last-child td, &:last-child th": {
		border: 0,
	},
}));

const ManageAllOrders = () => {
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		axios
			.get(`https://salty-chamber-27188.herokuapp.com/orders`)
			.then((res) => {
				setOrders(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const removeOrder = (id) => {
		axios
			.delete(`https://salty-chamber-27188.herokuapp.com/orders?id=${id}`)
			.then((res) => {
				setOrders(orders.filter((order) => order._id !== id));
			})
			.catch((err) => console.log(err));
	};

	const changeStatus = (id) => {
		axios
			.put(`https://salty-chamber-27188.herokuapp.com/orders?id=${id}`)
			.then((res) => {
				setOrders((prevOrders) =>
					prevOrders.filter((order) => {
						order.status = order._id === id ? "Shipped" : order.status;
						return order;
					})
				);
			})
			.catch((err) => console.log(err));
	};

	return (
		<Wrapper>
			<Typography variant='h4' mb={4}>
				Your ordered products
			</Typography>

			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 700 }} aria-label='customized table'>
					<TableHead>
						<TableRow>
							<StyledTableCell>Model</StyledTableCell>
							<StyledTableCell align='right'>Brand</StyledTableCell>
							<StyledTableCell align='right'>Email</StyledTableCell>
							<StyledTableCell align='right'>Status</StyledTableCell>
							<StyledTableCell align='right'>Action</StyledTableCell>
							<StyledTableCell align='right'>Delete Order?</StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{orders.map((row) => (
							<StyledTableRow key={row.name}>
								<StyledTableCell component='th' scope='row'>
									{row.productModel}
								</StyledTableCell>
								<StyledTableCell align='right'>
									{row.productName}
								</StyledTableCell>
								<StyledTableCell align='right'>{row.email}</StyledTableCell>
								<StyledTableCell align='right'>{row.status}</StyledTableCell>
								<StyledTableCell
									align='right'
									onClick={() => changeStatus(row._id)}
									style={{ cursor: "pointer", display: "block" }}>
									Ship
								</StyledTableCell>
								<StyledTableCell
									align='right'
									onClick={() => removeOrder(row._id)}
									style={{ cursor: "pointer" }}>
									&times;
								</StyledTableCell>
							</StyledTableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Wrapper>
	);
};

export default ManageAllOrders;

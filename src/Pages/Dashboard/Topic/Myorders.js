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
import useAuth from "../../../Hooks/useAuth";
import Alerts from "../../../Common/Alert";

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

const Myorders = () => {
	const [orders, setOrders] = useState([]);
	const [alert, setAlert] = useState(false);
	const { user } = useAuth();

	useEffect(() => {
		axios
			.get(
				`https://salty-chamber-27188.herokuapp.com/orders?email=${user.email}`
			)
			.then((res) => {
				setOrders(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [user]);

	const removeOrder = (id) => {
		if (window.confirm("Are you to remove your order permanently?")) {
			axios
				.delete(`https://salty-chamber-27188.herokuapp.com/orders?id=${id}`)
				.then((res) => {
					if (res.data.deletedCount) {
						setAlert(true);
						setOrders(orders.filter((order) => order._id !== id));
						setTimeout(() => {
							setAlert(false);
						}, 3000);
					}
				})
				.catch((err) => console.log(err));
		}
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
							<StyledTableCell align='right'>Address</StyledTableCell>
							<StyledTableCell align='right'>Status</StyledTableCell>
							<StyledTableCell align='right'>Cancel Order?</StyledTableCell>
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
								<StyledTableCell align='right'>{row.address}</StyledTableCell>
								<StyledTableCell align='right'>{row.status}</StyledTableCell>
								<StyledTableCell
									align='right'
									onClick={() => removeOrder(row._id)}
									style={{ cursor: "pointer", display: "block" }}>
									&times;
								</StyledTableCell>
							</StyledTableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			{alert && <Alerts text='Ordere Deleted Successfully' />}
		</Wrapper>
	);
};

export default Myorders;

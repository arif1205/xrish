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

const ManageProduct = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		axios
			.get(`https://salty-chamber-27188.herokuapp.com/products`)
			.then((res) => {
				setProducts(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const removeProducts = (id) => {
		axios
			.delete(`https://salty-chamber-27188.herokuapp.com/products?id=${id}`)
			.then((res) => {
				setProducts(products.filter((order) => order._id !== id));
			})
			.catch((err) => console.log(err));
	};

	return (
		<Wrapper>
			<Typography variant='h4' mb={4}>
				All Products
			</Typography>

			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 700 }} aria-label='customized table'>
					<TableHead>
						<TableRow>
							<StyledTableCell>Model</StyledTableCell>
							<StyledTableCell align='right'>Brand</StyledTableCell>
							<StyledTableCell align='right'>Price</StyledTableCell>
							<StyledTableCell align='right'>Remove Product?</StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{products.map((row) => (
							<StyledTableRow key={row.name}>
								<StyledTableCell component='th' scope='row'>
									{row.model}
								</StyledTableCell>
								<StyledTableCell align='right'>{row.brand}</StyledTableCell>
								<StyledTableCell align='right'>{row.price}</StyledTableCell>
								<StyledTableCell
									align='right'
									onClick={() => removeProducts(row._id)}
									style={{ cursor: "pointer" }}>
									DELETE
								</StyledTableCell>
							</StyledTableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Wrapper>
	);
};

export default ManageProduct;

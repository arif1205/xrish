import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import { AlertWrapper } from "./Alerts.styles";

const Alerts = ({ text, severity }) => {
	const [open, setOpen] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setOpen(false);
		}, 3000);
	}, []);

	return (
		<Box sx={{ width: "30%" }} component={AlertWrapper}>
			<Collapse in={open}>
				<Alert
					severity={severity || "success"}
					action={
						<IconButton
							aria-label='close'
							color='inherit'
							size='small'
							onClick={() => {
								setOpen(false);
							}}>
							<i className='fa fa-close'></i>
						</IconButton>
					}
					sx={{ mb: 2 }}>
					{text}
				</Alert>
			</Collapse>
		</Box>
	);
};

export default Alerts;

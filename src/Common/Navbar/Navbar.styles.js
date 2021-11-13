import styled from "styled-components";

export const Menu = styled.div`
	background: #fff;
	width: 90%;
	margin: auto;
	padding: 20px 0;
	justify-content: space-between !important;

	div.logo {
		align-self: center;
		img {
			width: 80px;
		}
	}

	div.nav-links {
		align-self: center;

		a {
			text-transform: uppercase;
			font-size: 12px;
			color: #000;
		}
	}

	div.dashboard {
		a {
			text-transform: uppercase;
			font-size: 12px;
			color: #000;
		}
	}

	.d-flex {
		& > * {
			align-self: center;
			margin-bottom: 0;
		}
	}
`;

export const Container = styled.nav`
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 9999999;
	background: #fff;
	box-shadow: rgba(0, 0, 0, 0.45) 0px 15px 10px -15px;
`;

import styled from "styled-components";

export const Flex = styled.div`
	display: flex;
	justify-content: ${(props) =>
		props.className === "f-center" ? "center" : "space-between"};
	align-items: center;
	gap: 50px;
	padding: 20px 0;

	img {
		width: 100px;
	}

	a {
		color: #111;
		font-size: 12px !important;
		text-transform: uppercase;
	}

	p {
		color: #777;
	}
`;

import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  :root {
    --primary-color: #8d8d8d;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    overflow-x: hidden;
    font-family: 'Jost', sans-serif !important;
  }

  ul {
    list-style-type: none;
    margin-bottom: 0;
  }

   a {
     text-decoration: none;
   }

  img {
    max-width: 100%;
    object-fit: cover;
  }

  .d-flex {
    display: flex;
  }

  .f-gap-10 {
    gap: 10px;
  }

  .f-gap-20 {
    gap: 20px;
  }

  .f-gap-30 {
    gap: 30px;
  }

  .f-center {
    justify-content: center;
    align-items: center;
  }

  .f-column {
    flex-direction: column;
  }
`;

export const WhiteButton = styled.button`
	color: #000 !important;
	background: #fff !important;
	border-radius: 0 !important;
	font-size: 14px !important;
	text-transform: uppercase !important;
	font-family: "Jost", sans-serif !important;
	font-weight: normal !important;
	width: 150px !important;
`;

export const SectionTitle = styled.h1`
	text-transform: uppercase;
	padding-bottom: 80px;
	color: #111111;
	text-align: center;
	font-size: 24px;
	font-weight: normal;
`;

export const SectionWrapper = styled.div`
	padding: 50px 0;
	width: 95%;
	margin: auto;
`;

export const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	justify-content: center;
	grid-gap: 40px 80px;
`;

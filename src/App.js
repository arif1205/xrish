import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalStyle } from "./global.styles";
import Home from "./Pages/Home";

function App() {
	return (
		<>
			<GlobalStyle />
			<Router>
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
				</Switch>
			</Router>
		</>
	);
}

export default App;

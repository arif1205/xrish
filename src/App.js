import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalStyle } from "./global.styles";
import Explore from "./Pages/Explore";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./Common/PrivateRoute";
import Dashboard from "./Pages/Dashboard";

function App() {
	return (
		<AuthProvider>
			<GlobalStyle />
			<Router>
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route exact path='/explore'>
						<Explore />
					</Route>
					<PrivateRoute exact path='/explore/:id'>
						<Product />
					</PrivateRoute>
					<Route exact path='/login'>
						<Login />
					</Route>
					<Route exact path='/signup'>
						<Signup />
					</Route>
					<PrivateRoute path='/dashboard'>
						<Dashboard />
					</PrivateRoute>
				</Switch>
			</Router>
		</AuthProvider>
	);
}

export default App;

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./Common/PrivateRoute";
import AuthProvider from "./Context/AuthProvider";
// pages
import Explore from "./Pages/Explore";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";
import NotFound from "./Pages/NotFound";
// styles
import { GlobalStyle } from "./global.styles";

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
					<Route path='*'>
						<NotFound />
					</Route>
				</Switch>
			</Router>
		</AuthProvider>
	);
}

export default App;

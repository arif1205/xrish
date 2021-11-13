import { useState, useEffect } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import axios from "axios";

import {
	getAuth,
	onAuthStateChanged,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	updateProfile,
} from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
	const [user, setUser] = useState({});
	const [isLoggedin, setIsLoggedin] = useState(false);
	const [error, setError] = useState("");
	const [userInfo, setUserInfo] = useState({
		name: "",
		email: "",
		password: "",
	});

	const auth = getAuth();

	useEffect(() => {
		onAuthStateChanged(auth, (result) => {
			if (result) {
				const uid = result.uid;
				setUser({
					name: result.displayName,
					id: uid,
					email: result.email,
				});
				setIsLoggedin(true);
			} else {
				setUser({});
				setIsLoggedin(false);
			}
		});
	}, [auth]);

	// add name after new user created
	const addName = () => {
		updateProfile(auth.currentUser, {
			displayName: userInfo.name,
		})
			.then(() => {
				setUser({
					name: auth.currentUser?.displayName,
					id: auth.currentUser?.uid,
					email: auth.currentUser?.email,
				});
			})
			.catch((error) => {});
	};

	// post to database
	const postToDatabase = (data) => {
		axios
			.post("https://salty-chamber-27188.herokuapp.com/users", data)
			.then((res) => {
				console.log(res);
			})
			.catch((e) => {
				console.log(e);
			});
	};

	const register = () => {
		createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password)
			.then((userCredential) => {
				const user = userCredential.user;
				addName();
				setUser({
					name: user?.displayName,
					id: user?.uid,
					email: user?.email,
				});
				postToDatabase({
					id: user?.uid,
					email: user?.email,
				});
				setIsLoggedin(true);
				setError("");
				setUserInfo({
					name: "",
					email: "",
					password: "",
				});
			})
			.catch((error) => {
				const errorMessage = error.message;
				setError(errorMessage);
				setUser({});
				setIsLoggedin(false);
			});
	};

	const login = () => {
		signInWithEmailAndPassword(auth, userInfo.email, userInfo.password)
			.then((userCredential) => {
				const user = userCredential.user;
				setUser({
					name: user?.displayName,
					id: user.uid,
					email: user.email,
				});
				setIsLoggedin(true);
				setError("");
				setUserInfo({
					name: "",
					email: "",
					password: "",
				});
			})
			.catch((error) => {
				const errorMessage = error.message;
				setError(errorMessage);
				setUser({});
				setIsLoggedin(false);
			});
	};

	const logout = () => {
		signOut(auth).then(() => {
			setUser({});
			setIsLoggedin(false);
			setUserInfo({
				name: "",
				email: "",
				password: "",
			});
		});
	};

	return {
		user,
		error,
		register,
		login,
		logout,
		userInfo,
		setUserInfo,

		isLoggedin,
	};
};

export default useFirebase;

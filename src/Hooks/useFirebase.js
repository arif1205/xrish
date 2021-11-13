import { useState, useEffect } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

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
	// const [email, setEmail] = useState("");
	// const [password, setPassword] = useState("");
	// const [name, setName] = useState("");
	const [userInfo, setUserInfo] = useState({
		name: "",
		email: "",
		password: "",
		role: "",
	});

	const auth = getAuth();

	const setRole = (email) => {
		return email === "admin@admin.com" ? "admin" : "customer";
	};

	useEffect(() => {
		onAuthStateChanged(auth, (result) => {
			if (result) {
				const uid = result.uid;
				setUser({
					name: result.displayName,
					id: uid,
					email: result.email,
					role: setRole(result.email),
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
					role: "customer",
				});
			})
			.catch((error) => {});
	};

	// update role
	const makeAdmin = () => {
		updateProfile(auth.currentUser, {
			email: auth.currentUser.email,
		})
			.then(() => {
				setUser({
					name: auth.currentUser?.displayName,
					id: auth.currentUser?.uid,
					email: auth.currentUser?.email,
					role: "admin",
				});
			})
			.catch((error) => {});
	};

	const register = () => {
		createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password)
			.then((userCredential) => {
				const user = userCredential.user;
				console.log(user);
				addName();
				setUser({
					name: user?.displayName,
					id: user?.uid,
					email: user?.email,
					role: setRole(user?.email),
				});
				setIsLoggedin(true);
				setError("");
				setUserInfo({
					name: "",
					email: "",
					password: "",
					role: "",
				});
			})
			.catch((error) => {
				const errorMessage = error.message;
				setError(errorMessage);
				setUser({});
				setIsLoggedin(false);
			});
		// .finally(() => {
		// 	window.location.reload();
		// });
	};

	const login = () => {
		signInWithEmailAndPassword(auth, userInfo.email, userInfo.password)
			.then((userCredential) => {
				const user = userCredential.user;
				setUser({
					name: user?.displayName,
					id: user.uid,
					email: user.email,
					role: setRole(user.email),
				});
				setIsLoggedin(true);
				setError("");
				setUserInfo({
					name: "",
					email: "",
					password: "",
					role: "",
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
				role: "",
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
		makeAdmin,
		isLoggedin,
	};
};

export default useFirebase;

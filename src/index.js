import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";

/* Redux store */

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./store/reducers/rootReducer";
import { isLoggedIn } from "./store/actions/authActions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk))
);

/* Authentification check */

if (localStorage.sessionCookie && localStorage.sessionUser) {
	const session = JSON.parse(localStorage.sessionCookie);
	const currentUser = JSON.parse(localStorage.sessionUser);

	// This dispatch prevents quick redirection on page refresh while user is logged in (before the async isLoggedIn action bellow is done)
	store.dispatch({
		type: "auth/isLoggedIn",
		payload: { user: currentUser },
	});

	// has session expired ?
	let now = new Date();
	let sessionEnd = new Date(session.expires);
	if (sessionEnd.getTime() < now.getTime()) {
		console.log("Session ended >>> Redirection to homepage.");
		localStorage.removeItem("sessionCookie");
		localStorage.removeItem("sessionUser");
		store.dispatch({
			type: "auth/logout",
			payload: { successMessage: "La session a expirée. Reconnectez-vous." },
		});
	} else {
		store.dispatch(isLoggedIn(currentUser._id));
	}
} else {
	localStorage.removeItem("sessionCookie");
	localStorage.removeItem("sessionUser");
}

/* --------------------------------- */
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);

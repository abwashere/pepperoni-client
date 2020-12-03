import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

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

	// has session expired ?
	let now = new Date();
	let expDate = new Date(session.expires);
	if (expDate.getTime() < now.getTime()) {
		console.log("Session ended >>> Redirection to homepage.");
		localStorage.removeItem("sessionCookie");
		localStorage.removeItem("sessionUser");
		store.dispatch({
			type: "auth/logout",
			payload: { successMessage: "La session a expirée. Reconnectez-vous." },
		});
	} else {
		console.log(">>> Checking user authentification.");
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// Redux
import { Provider } from "react-redux";
import store from "./Redux/store/store";
import { getUser } from "./Redux/actions/user.action";

store.dispatch(getUser())

ReactDOM.createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
);



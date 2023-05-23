import { Routes, Route } from "react-router-dom";
import PublicRouter from "./Pages/Public/PublicRouter";
import ProfileRouter from "./Pages/Profile/ProfileRouter";
import AuthRouter from "./Pages/Auth/AuthRouter";
import AuthProvider from "./Helpers/AuthProvider";

import "./App.css";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/*" element={<PublicRouter />} />
				<Route path="/user/login/*" element={<AuthRouter />} />
				<Route
					path="/user/profile/*"
					element={
						<AuthProvider>
							<ProfileRouter />
						</AuthProvider>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import Login from "./Login";
import NotFound from "../../utils/NotFound";

export default function AuthRouter() {
	return (
		<Routes>
			<Route element={<AuthLayout />}>
				<Route path="/" element={<Login />} />
				<Route path="/*" element={<NotFound />} />
			</Route>
		</Routes>
	);
}

import React from "react";
import { Routes, Route } from "react-router-dom";
import ProfileLayout from "./ProfilLayout";
import Profile from "./Profile";
import NotFound from "../../utils/NotFound";

export default function AdminRouter() {
	return (
		<Routes>
			<Route element={<ProfileLayout />}>
				<Route path="/" element={<Profile />} />
				<Route path="/*" element={<NotFound />} />
			</Route>
		</Routes>
	);
}

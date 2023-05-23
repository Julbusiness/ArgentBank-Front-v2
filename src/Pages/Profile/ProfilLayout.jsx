import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { accountService } from "../../Services/account.service";

export default function PrivateLayout() {
	return (
		<div className="layout">
			<Navbar isLoggedIn={accountService.isLogged()} />
			<Outlet />
			<Footer />
		</div>
	);
}

import React from "react";
import NavbarSignin from "./NavbarSignin";
import NavbarConnected from "./NavbarConnected";

export default function Navbar(props) {
	const isLoggedIn = props.isLoggedIn;
	if (isLoggedIn) {
		return <NavbarConnected />;
	}
	return <NavbarSignin />;
}

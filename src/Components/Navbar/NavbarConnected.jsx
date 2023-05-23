import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { accountService } from "../../Services/account.service";
import { useSelector } from "react-redux";
import { isEmpty } from "../../utils/Utils"

import logo from "../../assets/argentBankLogo.png"

export default function NavbarConnected(props) {

	const navigate = useNavigate()

	const user = useSelector((state) => state.userReducer);


	const logout = () => {
		accountService.logout()
		navigate("/")
	}

	return (
		<nav className="main-nav">
			<NavLink to="/" className="main-nav-logo">
				<img
					className="main-nav-logo-image"
					src={logo}
					alt="Argent Bank Logo"
				/>
				<h1 className="sr-only">Argent Bank</h1>
			</NavLink>
			<div>
				<NavLink to="/user/profile" className="main-nav-item">
					<i className="fa fa-user-circle"></i>
					{!isEmpty(user) && user.firstName}
				</NavLink>
				<button onClick={logout} className="main-nav-item-button">
					<i className="fa fa-sign-out"></i>
					Sign Out
				</button>
			</div>
		</nav>
	);
}

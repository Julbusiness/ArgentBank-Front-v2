import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { accountService } from "../../Services/account.service";
import { useDispatch } from "react-redux";
import { getUser } from "../../Redux/actions/user.action";

export default function Login() {
	const navigate = useNavigate();
	const [login, setLogin] = useState({
		email: "steve@rogers.com", // mettre une chaine de caractere vide une fois l'app terminé
		password: "password456",
	});
	const dispatch = useDispatch();
	const [checked, setChecked] = useState(false);


	const onChange = (e) => {
		setLogin({
			...login,
			[e.target.name]: e.target.value,
		});
	};

	const handleChange = () => {
		setChecked(!checked)
	}

	const onSubmit = (e) => {
		e.preventDefault();

		if(checked) {
			accountService
				.login(login)
				.then((response) => {
					accountService.saveToken(response.data.body.token);
					dispatch(getUser());
					navigate("/user/profile");
				})
				.catch((error) => console.log(error));
		} else {
			accountService
			.login(login)
			.then((response) => {
				accountService.saveTokenSession(response.data.body.token);
				dispatch(getUser());
				navigate("/user/profile");
			})
			.catch((error) => console.log(error));
		}

	};

	return (
		<main className="main bg-dark">
			<section className="sign-in-content">
				<i className="fa fa-user-circle sign-in-icon"></i>
				<h1>Sign In</h1>
				<form onSubmit={onSubmit}>
					<div className="input-wrapper">
						<label htmlFor="email">Username</label>
						<input
							type="text"
							id="email"
							value={login.email}
							onChange={onChange}
						/>
					</div>
					<div className="input-wrapper">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
							value={login.password}
							onChange={onChange}
						/>
					</div>
					<div className="input-remember">
						<label htmlFor="remember-me">Remember me</label>
						<input type="checkbox" id="remember-me" checked={checked} onChange={handleChange} />
					</div>
					<button className="sign-in-button">Sign In</button>
				</form>
			</section>
		</main>
	);
}

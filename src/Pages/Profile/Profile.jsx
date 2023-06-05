import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { isEmpty } from "../../utils/Utils";
import { editUser, getUser } from "../../Redux/actions/user.action";


export default function Profile() {
	const [editToggle, setEditToggle] = useState(false);
	const user = useSelector((state) => state.userReducer);
	const [editContent, setEditcontent] = useState(user);
	const dispatch = useDispatch();
	const form = useRef()

	const handleEdit = async (e) => {
		e.preventDefault();

		const userData = {
			firstName: form.current[0].value,
			lastName: form.current[1].value,
		};

		await dispatch(editUser(userData));
		dispatch(getUser());
		setEditToggle(false)
		form.current.reset()
	};

	const handleCancel = () => {
		setEditToggle(false)
	}

	return (
		<main className="main bg-dark">
			{editToggle ? (
				<section className="edit">
					<h1 className="header">Welcome back</h1>
					<form ref={form} onSubmit={(e) => handleEdit(e)}>
						<div className="inputs">
							<div className="input-wrapper-edit">
								<label htmlFor="firstName"></label>
								<input
									type="text"
									id="firstName"
									placeholder={user.firstName}
									onChange={(e) => setEditcontent(e.target.value)}
								/>
							</div>
							<div className="input-wrapper-edit">
								<label htmlFor="lastName"></label>
								<input
									type="text"
									id="lastName"
									placeholder={user.lastName}
									onChange={(e) => setEditcontent(e.target.value)}
								/>
							</div>
						</div>
						<div className="buttons">
							<button className="sign-in-button-edit">Save</button>
							<button onClick={handleCancel} className="sign-in-button-edit">Cancel</button>
						</div>
					</form>
				</section>
			) : (
				<>
					<h1 className="header">
						Welcome back
						<br />
						{!isEmpty(user) && user.firstName} {!isEmpty(user) && user.lastName} !
					</h1>
					<button
						onClick={() => setEditToggle(!editToggle)}
						className="edit-button"
					>
						Edit Name
					</button>
				</>
			)}

			<h2 className="sr-only">Accounts</h2>
			<section className="account">
				<div className="account-content-wrapper">
					<h3 className="account-title">Argent Bank Checking (x8349)</h3>
					<p className="account-amount">$2,082.79</p>
					<p className="account-amount-description">Available Balance</p>
				</div>
				<div className="account-content-wrapper cta">
					<button className="transaction-button">View transactions</button>
				</div>
			</section>
			<section className="account">
				<div className="account-content-wrapper">
					<h3 className="account-title">Argent Bank Savings (x6712)</h3>
					<p className="account-amount">$10,928.42</p>
					<p className="account-amount-description">Available Balance</p>
				</div>
				<div className="account-content-wrapper cta">
					<button className="transaction-button">View transactions</button>
				</div>
			</section>
			<section className="account">
				<div className="account-content-wrapper">
					<h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
					<p className="account-amount">$184.30</p>
					<p className="account-amount-description">Current Balance</p>
				</div>
				<div className="account-content-wrapper cta">
					<button className="transaction-button">View transactions</button>
				</div>
			</section>
		</main>
	);
}

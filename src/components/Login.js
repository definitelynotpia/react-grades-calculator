import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../App.css";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showLoginError, isShowLoginError] = useState(false);
	const navigate = useNavigate();

	const loginCredentials = [
		{ email: "harry.styles.shs@school.edu.com", password: "asitwas" },
		{ email: "taylor.swift.college@school.edu.com", password: "cruelsummer1989" },
		{ email: "lana.delrey.college@school.edu.com", password: "summertimesadness" },
	];

	const validateLogin = () => {
		// get login credentials
		const arrayIndex = loginCredentials.findIndex((obj) => email === obj.email);
		var isValidEmail = loginCredentials[arrayIndex].email === email;
		var isValidPassword = loginCredentials[arrayIndex].password === password;
		console.log(isValidEmail);
		console.log(isValidPassword);

		if (isValidEmail) {
			if (isValidPassword) {
				navigate('/grades');
			}
			isShowLoginError(true);
		} else {
			isShowLoginError(true);
		}
	};

	return <>
		<div className="card">

			<div className="card-body bg-info">
				<h5 className="card-title">Student Portal Login</h5>
			</div>

			<div className="card-body">

				{showLoginError && <div className="alert alert-warning align-items-center">
					<div>Invalid email or password.</div>
					<div>Please try again.</div>
				</div>}

				<form>
					<div className="input-group flex-nowrap">
						<span className="input-group-text" id="addon-wrapping">Email</span>
						<input type="text" className="form-control" onChange={(e) => setEmail(e.target.value)} value={email} id="quiz" name="quiz" min="0" max="100" />
					</div>
					<div className="input-group flex-nowrap">
						<span className="input-group-text" id="addon-wrapping">Password</span>
						<input type="text" className="form-control" onChange={(e) => setPassword(e.target.value)} value={password} id="labActivity" name="labActivity" min="0" max="100" />
					</div>
					<button type="button" className="btn btn-success" onClick={validateLogin}>Login</button>
				</form>
			</div>

		</div>
	</>;
}
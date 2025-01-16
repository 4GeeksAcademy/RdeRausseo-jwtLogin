import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
			<div className="container-fluid">

				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link to="/singup" className="nav-link active" aria-current="page" href="#">
								Sing up
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/login" className="nav-link" href="#">
								Login
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
};

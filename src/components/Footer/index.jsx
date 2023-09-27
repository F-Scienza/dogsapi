import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
function Footer() {
	return (
		<div className="footer-container">
			<div className="footer-content">
				<h3>F-Sienza</h3>
				<p>Aplicación desarrollada consumiendo la API de perritos </p>
				<div className="social-container">
					<Link
						className="sociallink"
						to="https://github.com/F-Scienza/dogsapi"
					>
						Codigo
					</Link>
					<Link
						className="sociallink"
						to="https://www.linkedin.com/in/facundo-scienza/"
					>
						Linkedin
					</Link>
				</div>
			</div>
		</div>
	);
}

export { Footer };

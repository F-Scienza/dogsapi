import React from 'react';
import './footer.css';
function Footer() {
	return (
		<div className="footer-container">
			<div className="footer-content">
				<h3>F-Sienza</h3>
				<p>Aplicación desarrollada consumiendo la API de perritos </p>
				<ul className="socials">
					<li>
						Linkedin
					</li>
					<li>
						github
					</li>
				</ul>
			</div>
		</div>
	);
}

export { Footer };

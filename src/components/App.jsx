import './app.css';
import { Footer } from './Footer';
import { Header } from './Header/Index';
import { Router } from './Routes';
function App() {
	return (
		<div className="app">
			<Header />
				<Router/>
			<Footer />
		</div>
	);
}

export { App };

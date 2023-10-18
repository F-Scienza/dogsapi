import './app.css';
import { Footer } from './Footer';
import { Header } from './Header/Index';
import { RandomFetchs } from './RandomFetchs';
function App() {
	return (
		<div className="app">
			<Header />
			<RandomFetchs/>
			<Footer />
		</div>
	);
}

export { App };

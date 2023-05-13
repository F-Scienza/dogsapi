import './app.css';
import { Footer } from './Footer';
import { Header } from './Header/Index';
import { MyFavDogs } from './MyFavDogs';
import { RandomFetchs } from './RandomFetchs/index.jsx';
function App() {
	return (
		<div className="app">
			<Header />
			<RandomFetchs />
			<MyFavDogs />
			<Footer />
		</div>
	);
}

export { App };

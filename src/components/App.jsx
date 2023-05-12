import "./app.css"
import { Header } from "./Header/Index";
import { RandomFetchs } from './RandomFetchs/index.jsx';
function App() {
	return (
		<div className="app">
			<Header></Header>
			<RandomFetchs/>
		</div>
	);
}

export { App };

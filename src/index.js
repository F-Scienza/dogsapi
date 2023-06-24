import { App } from './components/App.jsx';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { DogsContextProvider } from './context/index.jsx';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
	<DogsContextProvider>
		<BrowserRouter>
			<App tab="home" />
		</BrowserRouter>
	</DogsContextProvider>
);

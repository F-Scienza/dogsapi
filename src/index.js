import { App } from './components/App.jsx';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
const container = document.getElementById('app');
const root = createRoot(container);
root.render(
    <BrowserRouter>
        <App tab="home" />
    </BrowserRouter>
);
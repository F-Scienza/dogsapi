// import React from 'react';
// import ReactDOM from 'react-dom';
// import { App } from './components/App.jsx';
// import "./index.css"
// ReactDOM.render(
// 	<React.StrictMode>
// 		<App />
// 	</React.StrictMode>,
// 	document.getElementById('root')
// );
import { App } from './components/App.jsx';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container); 
root.render(<App tab="home" />);
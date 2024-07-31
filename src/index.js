import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { createRoot } from 'react-dom/client';

// Getting the root element from the DOM
const rootElement = document.getElementById('root');

// Creating a root and rendering your App component
const root = createRoot(rootElement);
root.render(<App />);


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

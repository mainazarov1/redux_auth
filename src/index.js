// External imports
import React from 'react';
import { createRoot } from 'react-dom/client';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
// Local imports
import App from './App';
import rootReducer from './reducers'
// Assets
import './index.css';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

createRoot(document.getElementById('root'))
	.render(
	<Provider store={store}>
		<App />
	</Provider>
);
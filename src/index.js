import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory,IndexRoute } from 'react-router';
import App from './App';
import './index.css';
import store from './store';

ReactDOM.render(
	<Provider store={ store }>
		<Router history={ browserHistory }>
			<Route path='/' component={ App }>
				 <IndexRoute component={App} />
			</Route>
		</Router>		
	</Provider>,
  document.getElementById('root')
);

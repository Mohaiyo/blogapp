import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router, Route, browserHistory,IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import App from './App';
import { Trending,About,MainPage } from './components/index';

import store from './store';

ReactDOM.render(
 <Provider store={ store } >
  <Router history={ browserHistory } >
   <Route path="/" component={App} >
     <IndexRoute component={MainPage} />
     <Route path="trending" component={Trending} /> 
     <Route path="about" component={About} />      
   </Route>
  </Router>
 </Provider>,
  document.getElementById('root')
);

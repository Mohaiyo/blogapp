import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router, Route, browserHistory,IndexRoute } from 'react-router';
import App from './App';
import { LifeSentiment,About,Main,NormalLoginForm,RegistrationForm } from './components/index';
import store from './store';



ReactDOM.render(
 <Provider store={ store } >
  <Router history={ browserHistory } >
   <Route path="/" component={App} >
     <IndexRoute component={ Main } />
     <Route path="lifesentiment" component={ LifeSentiment } />
     <Route path="about" component={About} />
     <Route path="user/signin" component={ NormalLoginForm } />
     <Route path="user/signup" component={ RegistrationForm } />
   </Route>
  </Router>
 </Provider>,
  document.getElementById('root')
);

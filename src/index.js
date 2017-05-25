import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './Home.js';
import Projects from './Projects.js';
import Login from './Login.js';
import Join from './Join.js';
import Logout from './Logout.js';
import EnsureLoggedInContainer from './EnsureLoggedInContainer.js';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './index.css';
import statsconsultantApp from './reducers';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

import { Router, Route, IndexRoute, browserHistory } from 'react-router'

let store = createStore(statsconsultantApp)

store.dispatch({
							 type: 'SET_LOGIN_STATE',
							 value: false
							 });

store.dispatch({
							 type: 'SET_REDIRECT_URL',
							 value: "/"
							 });

store.dispatch({
							 type: 'SET_BASE_URL',
							 value: "http://localhost:8888/"
							 });

ReactDOM.render((
<LocaleProvider locale={enUS}>
 <Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
	    <Route path="/login" component={Login}/>
	    <Route path="/join" component={Join}/>
            <Route path="/logout" component={Logout}/>
            <Route component={EnsureLoggedInContainer}>
              <Route path="/projects" component={Projects}/>
            </Route>
        </Route>
    </Router>
 </Provider>
</LocaleProvider>
), document.getElementById('root'));

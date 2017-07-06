import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './Home.js';
import Projects from './Projects.js';
import Login from './Login.js';
import Join from './Join.js';
import Logout from './Logout.js';
import EnsureLoggedInContainer from './EnsureLoggedInContainer.js';
import { Provider } from 'mobx-react';
//import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
//import './index.css';

import { Router, Route, IndexRoute, browserHistory } from 'react-router'

//const routingStore = new RouterStore();

import {store} from './store'

const stores = {store}

ReactDOM.render((
 <Provider {...stores}>
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
), document.getElementById('root'));

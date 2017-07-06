import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { browserHistory  } from 'react-router'

var App = inject("store")(observer(React.createClass({
	componentDidMount() {
		
		console.log(this.props.store.user.loggedin)
		if (!this.props.store.user.loggedin) {
			// set the current url/path for future redirection (we use a Redux action)
			// then redirect (we use a React Router method)
			//this.props.setRedirectUrl(this.props.currentURL)
			browserHistory.replace("/")
		}
	},
	
	render() {
		
		//console.log(this.props.isLoggedIn)
		
		if (this.props.store.user.loggedin) {
			return this.props.children
		} else {
			return null
		}
	}
})))

export default App

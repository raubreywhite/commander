import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { browserHistory  } from 'react-router'
import * as redirectUrlActions from './actions/redirectUrl.actions.js';

class EnsureLoggedInContainer extends React.Component {
	componentDidMount() {
		
		console.log(this.props.isLoggedIn)
		if (!this.props.isLoggedIn) {
			// set the current url/path for future redirection (we use a Redux action)
			// then redirect (we use a React Router method)
			this.props.setRedirectUrl(this.props.currentURL)
			browserHistory.replace("/login")
		}
	}
	
	render() {
		
		//console.log(this.props.isLoggedIn)
		
		if (this.props.isLoggedIn) {
			return this.props.children
		} else {
			return null
		}
	}
}

// Grab a reference to the current URL. If this is a web app and you are
// using React Router, you can use `ownProps` to find the URL. Other
// platforms (Native) or routing libraries have similar ways to find
// the current position in the app.
function mapStateToProps(state, ownProps) {
	return {
	isLoggedIn: state.loggedIn,
	currentURL: ownProps.location.pathname
	}
}

function mapDispatchToProps (dispatch){
	return bindActionCreators({
														setRedirectUrl: redirectUrlActions.setRedirectUrl
	}, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(EnsureLoggedInContainer)

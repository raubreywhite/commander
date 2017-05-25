import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { browserHistory  } from 'react-router'
import * as loggedInActions from './actions/loggedIn.actions.js';

// css from https://github.com/susielu/minimal-ui

class Login extends React.Component {
    componentDidMount() {
			this.props.setLoggedIn(false)
			browserHistory.replace("/")
		}
	
    render() {
        
        return (
                <div>
                <section id="usage">
                <div className="container">
                <div className="column10 prefix1 txt-center">
                <h2 className="txt-center">Goodbye</h2>
                </div>
                </div>
                </section>
                </div>
                );
    }
}

function mapStateToProps(state, ownProps) {
	return {
	isLoggedIn: state.loggedIn,
	currentURL: ownProps.location.pathname
	}
}

function mapDispatchToProps (dispatch){
	return bindActionCreators({
														setLoggedIn: loggedInActions.setLoggedIn
														}, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)

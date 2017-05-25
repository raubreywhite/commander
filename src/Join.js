import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { browserHistory  } from 'react-router'
import * as loggedInActions from './actions/loggedIn.actions.js';
import * as userActions from './actions/user.actions.js';
import 'whatwg-fetch';

// css from https://github.com/susielu/minimal-ui

class App extends React.Component {

	constructor(props) {
    super(props);
    this.doSignUp = this.doSignUp.bind(this)
  }

		doSignUp(){
			//Content-Type: application/json" -X POST -d '{"type":"Statistician","email":"r@rwhichard White","password":"hello"}' http://localhost:8080/create/users
			
			     console.log("inside post api");
					 console.log(this.props.baseURL);
     fetch(this.props.baseURL+'create/users', {
     method: 'POST',
     headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                },


      body: JSON.stringify({
				type:"Statistician",
				email:"r@rwhite.no",
				name:"Richard White",
				password:"hello"
     })
      }).then((response) => response.json())
        .then((responseData) => {
                                 console.log("inside responsejson");
                                 console.log('response object:',responseData)
																 this.props.setUser(responseData)
																 console.log(this.props.user)
																 this.props.setLoggedIn(true)
																	browserHistory.replace("/")
         });
			
		
		}
	
    render() {
        
        return (
                <div>
                <section id="usage">
                <div className="container">
                <div className="column10 prefix1 txt-center">
                <h2 className="txt-center">Create new account</h2>
								<button onClick={this.doSignUp}>helo</button>
                <p>A <a href="stats/">compendium</a> of questions I have received as part of my work as a statistician.</p>
                <p>You can also download the pdf version <a href="stats/a-compendium-of-statistics-questions.pdf">here</a>.</p>
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
	currentURL: ownProps.location.pathname,
	baseURL: state.baseURL,
	user: state.user,
	}
}

function mapDispatchToProps (dispatch){
	return bindActionCreators({
														setLoggedIn: loggedInActions.setLoggedIn,
														setUser: userActions.setUser
														}, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(App)

import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { browserHistory  } from 'react-router'
import 'whatwg-fetch';

// css from https://github.com/susielu/minimal-ui

var App = inject("store")(observer(React.createClass({

		doSignUp(){
			//Content-Type: application/json" -X POST -d '{"type":"Statistician","email":"r@rwhichard White","password":"hello"}' http://localhost:8080/create/users
			
			     console.log("inside post api");
					 console.log(this.props.store.baseURL);
     fetch(this.props.store.baseURL+'create/users', {
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
																 this.props.store.user = responseData
																 console.log(this.props.store.user)
																 this.props.store.user.loggedin = true
																	browserHistory.replace("/")
         });
			
		
		},
	
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
})))

export default App

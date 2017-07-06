import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import  renderIf  from 'render-if';
import { Link } from 'react-router'
import { browserHistory  } from 'react-router'
import './App.css';

// css from https://github.com/susielu/minimal-ui

var HomeUnloggedIn = inject("store")(observer(React.createClass({
	
	/*constructor(props) {
    super(props);
    this.doLogin = this.doLogin.bind(this)
  }*/

		doLogin(){
			//Content-Type: application/json" -X POST -d '{"type":"Statistician","email":"r@rwhichard White","password":"hello"}' http://localhost:8080/create/users
			
			     console.log("inside post api");
					 console.log(this.props.baseURL);
     fetch(this.props.store.baseURL+'login', {
     method: 'POST',
     headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                },


      body: JSON.stringify({
				email:"r@rwhite.no",
				password:"hello",
     })
      }).then((response) => response.json())
        .then((responseData) => {
                                 //console.log("inside responsejson");
                                 //console.log('response object:',responseData)
																 //this.props.setUser(responseData)
																 //console.log(this.props.user)
																 //this.props.setLoggedIn(true)
                                 console.log(this.props.store.user)
                                 this.props.store.user = responseData
                                 console.log(this.props.store.user)
																 browserHistory.replace("/")
         });
			
		
		},
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
                <h2 className="txt-center">LOGIN</h2>
								<button onClick={this.doLogin}>helo</button>
                </div>
                <div className="column10 prefix1 txt-center">
                <h2 className="txt-center">Create new account</h2>
								<button onClick={this.doSignUp}>helo</button>
                </div>
                </div>
                </section>
                </div>
                );
    }
})))


class HomeLoggedIn extends Component {
	
	render() {
		
		return (
						<div>
						
						<section id="usage">
						<div className="container">
						<div className="column10 prefix1 txt-center">
						<h2 className="txt-center">You are logged in</h2>
						<p>w@<p className="display-no">foo</p>rwhite.no</p>
						</div>
						</div>
						</section>
						
						<section id="nav">
						<div className="container">
						<div className="column4 prefix4">
						<hr/>
						</div>
						<div className="column10 prefix1 txt-center">
						<h2 className="txt-center">Education</h2>
						<h4>Harvard University, Cambridge, USA (2009 - 2012)</h4>
						<p>Ph.D in Biostatistics</p>
						<p>MA in Biostatistics (Frank Knox fellowship)</p>
						<h4>University of Wollongong, Wollongong, Australia (2005 - 2009)</h4>
						<p>B. Maths (Advanced) Honours (Applied Statistics)</p>
						</div>
						</div>
						</section>
						
						
						<section id="nav">
						<div className="container">
						<div className="column4 prefix4">
						<hr/>
						</div>
						<div className="column10 prefix1 txt-center">
						<h2 className="txt-center">Skills/Languages</h2>
						<p>R (10+ years)</p>
						<p>STATA (10+ years)</p>
						<p>Docker (1 year)</p>
						<p>Python (1 year)</p>
						<p>ReactJS+D3 (6 months)</p>
						</div>
						</div>
						</section>
						</div>
						);
	}
}
/*

        {renderIf(!this.props.isLoggedIn)(<HomeUnloggedIn/>)}
        {renderIf(this.props.isLoggedIn)(<HomeLoggedIn/>)}
*/
var App = inject("store")(observer(React.createClass({
	
	render() {
		
		return (
        <div>
        {renderIf(!this.props.store.user.loggedin)(
            <HomeUnloggedIn/>
        )}
        {renderIf(this.props.store.user.loggedin)(
            <HomeLoggedIn/>
        )}
				</div>	
						);
	}
})))

export default App


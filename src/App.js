import React, { Component } from 'react';
import { connect } from 'react-redux'
import { IndexLink, Link, navigateTo, browserHistory } from 'react-router'
import './index.css';
import renderIf from 'render-if';

// css from https://github.com/susielu/minimal-ui

class App extends Component {
	
    constructor(props) {
        super(props);
        this.state = {
         x : 3
        };
    }
	
	componentDidUpdate(prevProps) {
		const isLoggingOut = prevProps.isLoggedIn && !this.props.isLoggedIn
		const isLoggingIn = !prevProps.isLoggedIn && this.props.isLoggedIn
		//console.log(isLoggingIn)
		//console.log(isLoggingOut)
		if (isLoggingIn) {
			browserHistory.replace(this.props.redirectUrl)
			//dispatch(navigateTo(redirectUrl))
		} else if (isLoggingOut) {
			// do any kind of cleanup or post-logout redirection here
		}
	}
	
	
    render() {
        
        
        
        return (
                
                <div>
                <header>
                <div className="container">
                <div className="txt-center">
                <h1 className="column12">Stat Commander {this.state.x}</h1>
                <nav className="column12 nav nav-small">
                <IndexLink to="/" activeClassName="cl-teal">Home</IndexLink>
								{renderIf(!this.props.isLoggedIn)(
  								<Link to="/join" activeClassName="cl-teal">Sign up</Link>
								)}
								{renderIf(!this.props.isLoggedIn)(
								 <Link to="/login" activeClassName="cl-teal">Sign in</Link>
								 )}
								{renderIf(this.props.isLoggedIn)(
                  <Link to="/projects" activeClassName="cl-teal">Projects</Link>
								)}
								{renderIf(this.props.isLoggedIn)(
									<Link to="/logout" activeClassName="cl-teal">Sign out ({this.props.user["email"]})</Link>
								)}
                </nav>
                </div>
                </div>
                </header>
                
                {this.props.children}
                
                <footer className="bg-dark">
                <div className="container txt-center">
                <div className="column12">
                <p> </p>
                </div>
                </div>
                </footer>
                </div>
                );
    }
}

function mapStateToProps(state) {
	return {
	isLoggedIn: state.loggedIn,
	redirectUrl: state.redirectUrl,
	user: state.user,
	}
}

export default connect(mapStateToProps)(App)

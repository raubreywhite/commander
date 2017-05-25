import React, { Component } from 'react';
import { connect } from 'react-redux';
import  renderIf  from 'render-if';
import { Link } from 'react-router'
import './App.css';

// css from https://github.com/susielu/minimal-ui

class HomeUnloggedIn extends Component {
	
	render() {
		
		return (
						<div>
						
						<section id="usage">
						<div className="container">
						<div className="column10 prefix1 txt-center">
						<h2 className="txt-center">Welcome</h2>
						<p>Would you like to <Link to="/login">Login</Link>?</p>
						</div>
						</div>
						</section>
						
            </div>
						);
	}
}
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
class App extends Component {
	
	render() {
		
		return (
        <div>
        {renderIf(!this.props.isLoggedIn)(
            <HomeUnloggedIn/>
        )}
        {renderIf(this.props.isLoggedIn)(
            <HomeLoggedIn/>
        )}
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

export default connect(mapStateToProps)(App)



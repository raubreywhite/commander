import React, { Component } from 'react';
import './App.css';
import { bindActionCreators } from 'redux';
import { browserHistory  } from 'react-router'
import { connect } from 'react-redux'
import renderIf from 'render-if';
import * as actions from './actions';
import Accordion from './Accordion.js';


// css from https://github.com/susielu/minimal-ui




class App extends Component {

		constructor(props) {
    super(props);
		this.doGetUser = this.doGetUser.bind(this)
		this.doGetProject = this.doGetProject.bind(this)
		this.doGetProjects = this.doGetProjects.bind(this)
		this.doEditUser = this.doEditUser.bind(this)
		this.doEditProject = this.doEditProject.bind(this)
    this.doMakeProject = this.doMakeProject.bind(this)
		this.displayProjects = this.displayProjects.bind(this)
		
  }
	
	componentDidMount() {
	console.log("DIDMOUNT")
	console.log(this.props.user)
		this.doGetProjects()
}
	
	doGetUser(){
	     fetch(this.props.baseURL+'get/users', {
     method: 'POST',
     headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                },


      body: JSON.stringify({
				id: this.props.user.id,
				session: this.props.user.session,
				
     })
      }).then((response) => response.json())
        .then((responseData) => {
                                 console.log("got user");
                                 console.log('response object:',responseData)
																 this.props.setUser(responseData)
         });
	}
	
	doGetProject(id){
		console.log("dogetproject "+id)
	     fetch(this.props.baseURL+'get/projects', {
     method: 'POST',
     headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                },


      body: JSON.stringify({
				id: id,
				session: this.props.user.session,
				
     })
      }).then((response) => response.json())
        .then((responseData) => {
                                 console.log("got project");
                                 console.log('response object:',responseData)
																 this.props.addProject(responseData)
																 console.log(this.props.projects)
																 console.log(this.props.projects[0].name)
         });
	}
	
	doGetProjects(){
		console.log("dogetprojects")
		this.props.clearProjects()
		console.log(this.props.user.projects)
		this.doEditProject()
		for(var i=0, len=this.props.user.projects.length; i<len; i++){
			this.doGetProject(this.props.user.projects[i])
		}
		console.log("finsihed getting projecs")
		console.log(this.props.projects)
	}
	
	doEditUser(updatedUser){
	     fetch(this.props.baseURL+'edit/users', {
     method: 'POST',
     headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                },


      body: JSON.stringify(updatedUser)
      }).then((response) => response.json())
        .then((responseData) => {
                                 console.log("Updated user");
                                 console.log('response object:',responseData)
							
         });
	}
	
	doEditProject(){
		console.log("editproj")
	}
	
	doMakeProject(){
			//Content-Type: application/json" -X POST -d '{"type":"Statistician","email":"r@rwhichard White","password":"hello"}' http://localhost:8080/create/users
			
			     console.log("inside post api");
					 console.log(this.props.baseURL);
     fetch(this.props.baseURL+'create/projects', {
     method: 'POST',
     headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                },


      body: JSON.stringify({
				session: this.props.user.session,
				name: "New project",
				client: "Client",
     })
      }).then((response) => response.json())
        .then((responseData) => {
                                 console.log("inside responsejson");
                                 console.log('response object:',responseData)
																 this.props.addProject(responseData)
																 console.log(this.props.user.projects)
																 var newUser = this.props.user
																 newUser.projects = this.props.projects.map(function(x){ return x.id})
																	this.doEditUser(newUser)
							
         });
			
		
		}
	
		displayProjects(){
			return(
			<p>{this.props.projects[0].name} </p>
			)
		}
	

/*

								*/

	
    render() {

        return (
                <div>
                <section id="usage">
                <div className="container">
                <div className="column10 prefix1 txt-center">
								<p><a href="#" onClick={this.doMakeProject}>Would you like to create one?</a></p>
                {renderIf(this.props.user.projects.length==0)(<h2 className="txt-center">You have no projects</h2>)}
								<Accordion/>
                </div>
                </div>
                </section>
                </div>
                );
    }

}


function mapStateToProps(state) {
	return {
	isLoggedIn: state.loggedIn,
	redirectUrl: state.redirectUrl,
	baseURL: state.baseURL,
	user: state.user,
	projects: state.projects,
	}
}

function mapDispatchToProps (dispatch){
	return bindActionCreators({
														setLoggedIn: actions.setLoggedIn,
														setUser: actions.setUser,
														addProject: actions.addProject,
														clearProjects: actions.clearProjects,
														}, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(App)

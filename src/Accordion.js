import React, { Component } from 'react';
//import './App.css';
import { bindActionCreators } from 'redux';
import { browserHistory  } from 'react-router'
import { connect } from 'react-redux'
import renderIf from 'render-if';
import * as actions from './actions';


import DatePicker from 'antd/lib/date-picker';  // for js
import 'antd/lib/date-picker/style/css';        // for css

//import 'antd/dist/antd.css';

import moment from 'moment';

// It's recommended to set locale in entry file globaly.
import 'moment/locale/en-au';
moment.locale('en-au');


var Accordionsection = React.createClass({
  handleClick: function(){
    if(this.state.open) {
      this.setState({
        open: false,
        class: "accordionwrapclosed"
      });
    }else{
      this.setState({
        open: true,
        class: "accordionwrapopen"
      });
    }
  },
  getInitialState: function(){
     return {
       open: false,
       class: "accordionwrapclosed"
     }
  },
	getClass: function(){
		if(this.props.id===this.props.openID){
			return "accordionwrapopen"
		} else {
			return "accordionwrapclosed"
		}
	},
  render: function() {
    return (
      <div>
        <h3 onClick={this.props.setOpenID.bind(this,this.props.id)}>{this.props.title}</h3>
        <div className={this.getClass()}>
            {this.props.children}
        </div>
      </div>
    );
  }
});

var Accordion = React.createClass({
  render: function() {
    return (
      <div >
        <Accordionsection title="Section Title One">   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nemo harum voluptas aliquid rem possimus nostrum excepturi!
        </Accordionsection>
        <Accordionsection title="Section Title Two">   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nemo harum voluptas aliquid rem possimus nostrum excepturi!
        </Accordionsection>
        <Accordionsection title="Section Title Three">   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nemo harum voluptas aliquid rem possimus nostrum excepturi!
        </Accordionsection>
      </div>
    );
  }
});


// css from https://github.com/susielu/minimal-ui




class App extends Component {

		constructor(props) {
    super(props);
		this.state = {
      openID: -9,
    };

		this.doGetUser = this.doGetUser.bind(this)
		this.doGetProject = this.doGetProject.bind(this)
		this.doGetProjects = this.doGetProjects.bind(this)
		this.doEditUser = this.doEditUser.bind(this)
		this.doEditProject = this.doEditProject.bind(this)
    this.doMakeProject = this.doMakeProject.bind(this)
		this.displayProjects = this.displayProjects.bind(this)
		this.setOpenID = this.setOpenID.bind(this)
		
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
	
		doMakeEntry(){
			//Content-Type: application/json" -X POST -d '{"type":"Statistician","email":"r@rwhichard White","password":"hello"}' http://localhost:8080/create/users
			
			     console.log("inside post api");
					 console.log(this.props.baseURL);
     fetch(this.props.baseURL+'create/entries', {
     method: 'POST',
     headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                },


      body: JSON.stringify({
				session: this.props.user.session,
				timeStart: Date.now(),
				timeEnd: Date.now(),
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
	
		setOpenID(val){
			if(val===this.state.openID){
				this.setState( { openID: -9 } );
				} else {
		   this.setState( { openID: val } );
			 console.log(this.props.projects[val])
			 }
		}
	
	
	
    render() {
var myThis = this;

var change = (value) => console.log(value);

        return (
                <div>
		{
		this.props.projects.map(function(proj, i){
									return <Accordionsection id={i} setOpenID={myThis.setOpenID} openID={myThis.state.openID} title={proj["name"]+" ("+proj["client"]+")"}>
									This is project {i}
									<ul>
									<li><DatePicker.RangePicker showTime={true} showToday={true} locale={"en-us"} /></li>
									<li>hi</li>
									</ul>
										
									</Accordionsection>
								})}

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

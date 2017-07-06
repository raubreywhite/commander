import React, { Component } from 'react';
import './App.css';
import { inject, observer } from 'mobx-react';
import { browserHistory  } from 'react-router'
import renderIf from 'render-if';
const ReactDataGrid = require('react-data-grid');


// css from https://github.com/susielu/minimal-ui


var App = inject("store")(observer(React.createClass({
  getInitialState() {
    this.createRows();
    this._columns = [
      { key: 'id', name: 'ID' },
      { key: 'title', name: 'Title' },
      { key: 'count', name: 'Count' } ];

    return null;
  },
	componentDidMount() {
	console.log("DIDMOUNT")
	console.log(this.props.store.user)
		this.doGetUser()
  },
	doGetUser(){
	     fetch(this.props.store.baseURL+'get/users', {
     method: 'POST',
     headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                },


      body: JSON.stringify(this.props.store.user)
      }).then((response) => response.json())
        .then((responseData) => {
                                 console.log("got user");
                                 console.log('response object:',responseData)
																 this.props.store.user = responseData
         });
	},
	doEditUser(updatedUser){
	     fetch(this.props.store.baseURL+'edit/users', {
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
																 this.props.store.user = responseData
         });
	},
	rowGetter(i) {
    return this._rows[i];
  },
	

/*

								*/

	
    render() {

        return (
                <div>
                <section id="usage">
                <div className="container">
                <div className="column10 prefix1 txt-center">
								//<p><a href="#" onClick={this.doMakeProject}>Would you like to create one?</a></p>
                {renderIf(this.props.store.user.clients.length==0)(<h2 className="txt-center">You have no clients</h2>)}
								{
                this.props.store.user.clients.map(function(client) {
                    console.log(client)
                    return <p>{client.name}</p>
                })
                }
                </div>
                </div>
                </section>
                </div>
                );
    }

})))

export default App

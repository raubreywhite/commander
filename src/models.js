import {observable, computed} from 'mobx'
import {
	list, object, primitive, createModelSchema
} from "serializr"

import { Router, Route, IndexRoute, browserHistory } from 'react-router'

export class Bill {
  constructor(
    year,
    month,
    billed,
    moneybilled,
    moneyreceived
  ){
    this.year=year;
    this.month=month;
    this.billed=billed;
    this.moneybilled=moneybilled;
    this.moneyreceived=moneyreceived;
    
    for (var key in this) {
      if(this[key]==null){
      	this[key]=0;
      }
		}
  }
}

export class Entry {
  constructor(
    session,
    status,
    rate,
    startyear,
    startmonth,
    startday,
    starthour,
    startmin,
    endyear,
    endmonth,
    endday,
    endhour,
    endmin,
    category,
    subcategory,
    info
  ){
    this.session=session;
    this.status=status;
    this.rate=rate;
    this.startyear=startyear;
    this.startmonth=startmonth;
    this.startday=startday;
    this.starthour=starthour;
    this.startmin=startmin;
    this.endyear=endyear;
    this.endmonth=endmonth;
    this.endday=endday;
    this.endhour=endhour;
    this.endmin=endmin;
    this.category=category;
    this.subcategory=subcategory;
    this.info=info
    
    for (var key in this) {
      if(this[key]==null){
      	this[key]=0;
      }
		}
  }
}

export class Project {
  name = "";
  entries = [];

  constructor(name,entries){
    this.name=name;
    this.entries=entries;
    
    if(this.name==null){
      this.name="";
    }
    if(this.entries==null){
      this.entries = [new Entry()]
    }
  }
}

export class Client {
  name = "";
  bills = [];
  projects = [];

  constructor(name,bills,projects){
    this.name=name;
    this.bills=bills;
    this.projects=projects;
    
    if(this.name==null){
      this.name="";
    }
    if(this.bills==null){
      this.bills = [new Bill()]
    }
    if(this.projects==null){
      this.projects = [new Project()]
    }
  }
}

export class User {
  id = "";
  session = "";
  email = "";
  name = "";
  clients = [];
  password = "";
  success = false;
  loggedin = false;

  constructor(id,session,email,name,clients,password,success,loggedin){
    this.id=id;
    this.session=session;
    this.email=email;
    this.name=name;
    this.clients=clients;
    this.password=password;
    this.success=success;
    this.loggedin=loggedin;
  
  
    if(this.clients==null){
        this.clients = [new Client()]
      }
    
    for (var key in this) {
      if(this[key]==null){
        this[key]=0;
      }
    }
    
  }
  
}

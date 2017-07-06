import {observable, transaction} from 'mobx';
import {createSimpleSchema, identifier, list, serialize, deserialize, object, update, primitive, createModelSchema} from 'serializr';
import {Bill, Entry, Project, Client, User} from './models';


createModelSchema(Bill, {
  year : primitive(),
  month : primitive(),
  billed : primitive(),
  moneybilled : primitive(),
  moneyreceived : primitive()
});


createModelSchema(Entry, {
  session : primitive(),
  status : primitive(),
  rate : primitive(),
  startyear : primitive(),
  startmonth : primitive(),
  startday : primitive(),
  starthour : primitive(),
  startmin : primitive(),
  endyear : primitive(),
  endmonth : primitive(),
  endday : primitive(),
  endhour : primitive(),
  endmin : primitive(),
  category : primitive(),
  subcategory : primitive(),
  info : primitive()
});

createModelSchema(Project, {
  name : primitive(),
  entries : list(object(Entry))
});

createModelSchema(Client, {
  name : primitive(),
  bills : list(object(Bill)),
  projects : list(object(Project))
});

export const userSchema = createModelSchema(User, {
  id : primitive(),
  session : primitive(),
  email : primitive(),
  name : primitive(),
  clients : list(object(Client)),
  password : primitive(),
  success : primitive(),
  loggedin : primitive()
});


export const store = observable({
    user: new User('htherei'),
    baseURL : "http://localhost:8888/"
});


// Model of the store itself
const storeModel = createSimpleSchema({
    user: object(User)
});

function serializeState(store) {
    return serialize(storeModel, store);
}

function deserializeState(store, json) {
    transaction(() => {
        update(storeModel, store, json);
    })
}

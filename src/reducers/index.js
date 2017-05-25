import { combineReducers } from 'redux'
import loggedInReducer from './loggedIn'
import redirectUrlReducer from './redirectUrl'
import baseUrlReducer from './baseUrl'
import userReducer from './user'
import projectsReducer from './project'
import entriesReducer from './entry'

const statsconsultantApp = combineReducers({
																					 loggedIn:loggedInReducer,
																					 redirectUrl:redirectUrlReducer,
																					 baseURL:baseUrlReducer,
																					 user:userReducer,
																					 projects:projectsReducer,
																					 entries:entriesReducer
																})

export default statsconsultantApp

export function setLoggedIn(val){
	return {
		 type: 'SET_LOGIN_STATE',
		 value: val
	}
}

export function setRedirectUrl(val){
	return {
		 type: 'SET_REDIRECT_URL',
		 value: val
	}
}

export function setUser(val){
	return {
		 type: 'SET_USER',
		 value: val
	}
}

export const addProject = (val) => {
  return {
    type: 'ADD_PROJECT',
    value: val,
  }
}

export const clearProjects = () => {
  return {
    type: 'CLEAR_PROJECTS',
  }
}

export const addEntry = (val) => {
  return {
    type: 'ADD_ENTRY',
    value: val,
  }
}

export const clearEntries = () => {
  return {
    type: 'CLEAR_ENTRIES',
  }
}

import { combineReducers } from 'redux'
import { contactsReducer } from './contactsReducer'
import { profileReducer } from './profileReducer'

export default combineReducers({
	contactsStore: contactsReducer,
	profileStore: profileReducer,
})
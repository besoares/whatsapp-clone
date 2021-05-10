import { contactList } from "../mocks/contactsMock";

const initialState = {
	contacts: [...contactList],
	selectedContact: null,
};

export const contactsReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case "SELECT_CONTACT":
			return {
				...state,
				selectedContact: payload,
			};
		case "SET_CONTACTS":
			return state;
		default:
			return state;
	}
};

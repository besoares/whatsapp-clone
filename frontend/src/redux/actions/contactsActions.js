export const setContactsAction = (contacts) => {
	return {
		type: "SET_CONTACS",
		payload: contacts,
	};
};

export const selectContactAction = (contact) => {
	return {
		type: "SELECT_CONTACT",
		payload: contact
	}
}

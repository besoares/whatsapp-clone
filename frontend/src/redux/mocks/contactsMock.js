import uniqid from "uniqid";

export const contactList = [
	{
		id: uniqid(),
		photo: "",
		name: "Nickolas",
		lastMessage: {
			message: "testing message",
			createdAt: new Date(),
			status: "received",
		},
		silenced: false,
		bloqued: false,
		messages: []
	},
	{
		id: uniqid(),
		photo: "",
		name: "Jhon Mark",
		lastMessage: {
			message: "testing message 2",
			createdAt: new Date(new Date().setDate(new Date().getDate() - 1)),
			status: "sent",
		},
		silenced: false,
		bloqued: false,
		messages: []
	},
	{
		id: uniqid(),
		photo: "",
		name: "Mathew Gregor",
		lastMessage: {
			message: "testing message 3",
			createdAt: new Date(new Date().setDate(new Date().getDate() - 3)),
			status: "read",
		},
		silenced: false,
		bloqued: false,
		messages: []
	},
	{
		id: uniqid(),
		photo: "",
		name: "Kathy",
		lastMessage: {
			message: "testing message 4",
			createdAt: new Date(new Date().setDate(new Date().getDate() - 6)),
			status: "received",
		},
		silenced: false,
		bloqued: false,
		messages: []
	},
	{
		id: uniqid(),
		photo: "",
		name: "Cristine Diana",
		lastMessage: {
			message: "testing message 5",
			createdAt: new Date(new Date().setDate(new Date().getDate() - 7)),
			status: "read",
		},
		silenced: false,
		bloqued: false,
		messages: []
	},
];

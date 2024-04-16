const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			getContacts: async () => {
				const requestOptions = {
					method: "GET",
					redirect: "follow"
				};
				const response = await fetch("https://playground.4geeks.com/contact/agendas/alejandro/contacts", requestOptions);
				const data = await response.json();
				setStore({ contacts: data });
			},
			postContact: async (contact) => {
				const requestOptions = {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(contact)
				};

				const response = await fetch("https://playground.4geeks.com/contact/agendas/alejandro/contacts", requestOptions);
				const data = await response.json();
				getActions().getContacts();
			},
			putContact: async (id, updatedContact) => {
				const requestOptions = {
					method: "PUT",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(updatedContact)
				};

				const response = await fetch(`https://playground.4geeks.com/contact/agendas/alejandro/contacts/${id}`, requestOptions);
				const data = await response.json();
				getActions().getContacts();
			},
			deleteContact: async (id) => {
				const requestOptions = {
					method: "DELETE"
				};

				await fetch(`https://playground.4geeks.com/contact/agendas/alejandro/contacts/${id}`, requestOptions);
				getActions().getContacts();
			}
		}
	};
};

export default getState;

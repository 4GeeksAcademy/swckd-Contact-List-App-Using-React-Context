const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			getContacts: async () => {
				try {
					const requestOptions = {
						method: "GET",
						redirect: "follow"
					};
					const response = await fetch("https://playground.4geeks.com/contact/agendas/alejandro/contacts", requestOptions);
					const data = await response.json();
					setStore({ contacts: data });
				} catch (error) {
					console.error(error);
				}

			},
			getSingleContact: async () => {
				try {
					const requestOptions = {
						method: "GET",
						redirect: "follow"
					};
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/alejandro/contacts/`, requestOptions);
					const data = await response.json();
					return data;
					// setStore({ contacts: data });
				} catch (error) {
					console.error(error);
				}

			},
			postContact: async (contact) => {

				try {
					const requestOptions = {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(contact)
					}
					const response = await fetch("https://playground.4geeks.com/contact/agendas/alejandro/contacts", requestOptions);
					const data = await response.json();
					getActions().getContacts();
				} catch (error) {
					console.error(error);
				}
			},
			putContact: async (id, updatedContact) => {

				try {
					const requestOptions = {
						method: "PUT",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(updatedContact)
					}
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/alejandro/contacts/${id}`, requestOptions);
					const data = await response.json();
					getActions().getContacts();
				} catch (error) {
					console.error(error);
				}

			},
			deleteContact: async (id) => {
				try {
					const requestOptions = { method: "DELETE" }
					await fetch(`https://playground.4geeks.com/contact/agendas/alejandro/contacts/${id}`, requestOptions);
					getActions().getContacts();

				} catch (error) {
					console.error(error);
				}
			}
		}
	};
}

export default getState;

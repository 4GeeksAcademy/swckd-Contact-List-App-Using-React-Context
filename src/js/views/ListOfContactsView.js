import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext.js";
import ContactComponent from "../component/ContactComponent.jsx";

const ListOfContactsView = () => {
	const { actions, store } = useContext(Context);

	useEffect(() => {
		actions.getContacts();
	}, []);

	return (
		<div className="text-center mt-5 p-5">
			<h1>List Of Contacts</h1>
			<div className="text-end">
				<Link to="/add-contact" type="button" className="btn btn-success">Add new contact</Link>
			</div>
			<div className="container mt-2">

				{store.contacts.contacts && store.contacts.contacts.map((contact, index) => (
					<ContactComponent key={index} contact={contact} />
				))}
			</div>
		</div>
	);
};
export default ListOfContactsView;
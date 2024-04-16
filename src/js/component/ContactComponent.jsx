import React, { useContext } from "react";
import { Context } from "../store/appContext";

const ContactComponent = ({ contact }) => {
    const { actions } = useContext(Context);

    const handleDelete = () => {
        actions.deleteContact(contact.id); // Call the delete action with the contact ID
    };

    return (
        <div className="row border d-flex align-items-center mt-1">
            <div className="col">
                <img src="https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg" className="img-fluid rounded-circle" style={{ width: "200px" }} alt="Contact"></img>
            </div>
            <div className="col">
                <ul className="list-group text-start">
                    <li className="list-group-item border-0 fw-bold">{contact.name}</li>
                    <li className="list-group-item border-0 py-0">📍 {contact.address}</li>
                    <li className="list-group-item border-0 py-0">📞 {contact.phone}</li>
                    <li className="list-group-item border-0 py-0">📧 {contact.email}</li>
                </ul>
            </div>
            <div className="col">
                <button type="button" className="btn btn-warning">✏️ Edit</button>
                <button type="button" className="btn btn-danger ms-2" onClick={handleDelete}>🗑️ Delete</button>
            </div>
        </div>
    );
};

export default ContactComponent;

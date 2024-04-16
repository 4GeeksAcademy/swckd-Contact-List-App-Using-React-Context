import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

const FormComponent = () => {
    const { actions } = useContext(Context);

    const [contact, setContact] = useState({
        name: "",
        emailAddress: "",
        phone: "",
        address: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact({
            ...contact,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        actions.postContact(contact);
        setContact({
            name: "",
            emailAddress: "",
            phone: "",
            address: ""
        });
    };

    return (
        <div className="container px-5 my-5">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label" htmlFor="name">Name</label>
                    <input
                        className="form-control"
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Full Name"
                        value={contact.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="emailAddress">Email Address</label>
                    <input
                        className="form-control"
                        id="emailAddress"
                        name="emailAddress"
                        type="email"
                        placeholder="Email Address"
                        value={contact.emailAddress}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="phone">Phone</label>
                    <input
                        className="form-control"
                        id="phone"
                        name="phone"
                        type="text"
                        placeholder="Phone"
                        value={contact.phone}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="address">Address</label>
                    <input
                        className="form-control"
                        id="address"
                        name="address"
                        type="text"
                        placeholder="Address"
                        value={contact.address}
                        onChange={handleChange}
                    />
                </div>

                <div className="d-grid">
                    <button className="btn btn-primary btn-lg" id="submitButton" type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default FormComponent;

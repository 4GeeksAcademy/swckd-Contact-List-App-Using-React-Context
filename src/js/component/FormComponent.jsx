import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Navigate, useNavigate, useParams } from "react-router-dom";


const FormComponent = () => {
    const navigate = useNavigate();

    const { id } = useParams();

    const { actions } = useContext(Context);

    const [contact, setContact] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    });

    useEffect(() => {
        if (id) {
            const getContactById = (id, data) => {
                const contact = data.find(contact => String(contact.id) === String(id));
                return contact ? contact : null;
            }

            const fetchData = async () => {
                const results = await actions.getSingleContact();

                return results.contacts;
            }

            const fetchContact = async () => {
                const data = await fetchData();
                const contact = getContactById(id, data);
                setContact(contact);
            }

            fetchContact();
        }
    }, []);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact({
            ...contact,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (id) {
            actions.putContact(id, contact);
        } else {
            actions.postContact(contact);
            setContact({
                name: "",
                email: "",
                phone: "",
                address: ""
            });
        }

        navigate("/");
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
                        maxLength={100}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="email">Email Address</label>
                    <input
                        className="form-control"
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email Address"
                        value={contact.email}
                        onChange={handleChange}
                        maxLength={100}
                        required
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
                        maxLength={100}
                        required
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
                        maxLength={100}
                        required
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

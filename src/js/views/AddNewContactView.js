import React from "react";



import "../../styles/home.css";

import { Link, useNavigate, useParams } from "react-router-dom";
import FormComponent from "../component/FormComponent.jsx";

import { Context } from "../store/appContext.js";


const AddNewContactView = () => {




    return (
        <div className="text-center mt-5 p-5">
            <h1>Add/Edit Contact</h1>
            <div className="text-end">
                <Link to="/" type="button" className="btn btn-success">List Contacts</Link>

            </div>
            <div className="container mt-2">
                <FormComponent />
            </div>
        </div>
    );

}
export default AddNewContactView;
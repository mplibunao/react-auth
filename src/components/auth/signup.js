import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import * as actions from "../../actions";
import Header from "../header";
import "../../styles/index.css";

class Signup extends Component {

    handleFormSubmit(values) {
        
    }
    
    renderField(field) {
        // field.meta.error contains the error message from the returned error object
        const { error, touched } = field.meta;
        return (
            <div>
                <fieldset className="form-group">
                    <label>{field.label}</label>
                    <input type={field.type} className="form-control" {...field.input} />
                </fieldset>
                <div className="error">
                    {/* if field was touched show error else, show empty string */}
                    { touched ? error : "" }
                </div>
            </div>
        );
    }

    render() {
        return (
            <div>
                <Header />
                <form>
                    <Field label="Email:"
                        name="email"
                        type="text"
                        component={this.renderField}
                    />
                    <Field label="Password:"
                        name="password"
                        type="password"
                        component={this.renderField}
                    />
                    <Field label="Confirm Password:"
                        name="passwordConfirm"
                        type="password"
                        component={this.renderField}
                    />
                    <button action="submit" className="btn btn-primary">Sign up!</button>
                </form>
            </div>
        );
    }
}

/**
 * When you submit/touch a field, redux form validates the field using the validate function
 * Returns an error object; Property names of the object correspond with the `name` of the field
 * Similar to error, values is also an object where its properties corresponds to the `name` of the fields but this time for the value
 * @param {Object} values 
 */
function validate(values) {
    // Instantiate empty errors object
    const errors = {};
    // Get (destructure) the values of the input fields through the values object
    const { email, password, passwordConfirm } = values;

    if (password !== passwordConfirm) {
        errors.password = "Passwords must match";
    }
    
    if (!password) {
        errors.password = "Please enter a password";
    } else if (password.length < 4) {
        errors.password = "Password must be longer than 3 characters";
    } else if ( /\d/g.test(password) === false || /[A-z]/g.test(password) === false ) {
        errors.password = "Password must be alphanumeric";
    } else if (/\s/g.test(password)) {
        errors.password = "Password must not contain any whitespace";
    }

    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;    
    if (!email) {
        errors.email = "Please enter an email address";
    } else if (emailRegex.test(email) === false) {
        errors.email = "Please enter a valid email address";
    }
    
    // Return errors object; If empty, then show no validation error, else show the validation error
    // for a particular field corresponding to the field `name`
    return errors;
} 

export default reduxForm({
    validate,
    form: "signup",
})(Signup);
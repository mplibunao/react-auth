import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class Signin extends Component {

    renderField(field){
        return (
            <fieldset className="form-group">
                <label>{field.label}</label>
                <input type="text"
                    className="form-control"
                    {...field.input}
                />
            </fieldset>
        );
    }

    handleFormSubmit(email, password){
        console.log(email, password);
        // Need to do something to log user in
    }

    render(){
        const { handleSubmit, fields } = this.props;
        return (
            <form onSubmit={handleSubmit(() => this.handleFormSubmit(email, password))}>
                <Field
                    label="Email:"
                    name="email"
                    component={this.renderField}
                />
                <Field
                    label="Password:"
                    name="password"
                    component={this.renderField}
                />
                <button action="submit" className="btn btn-primary">Sign in</button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'signin',
    fields: ['email', 'password']
})(Signin);
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

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

    handleFormSubmit = (values) => {
        console.log('values', values);
        // Need to do something to log user in
    }

    render(){
        const { handleSubmit } = this.props;
        return (
            // Arrow function causes values not to be found; Either use bind or arrow function like above ^ 
            <form onSubmit={handleSubmit(this.handleFormSubmit)}>
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
    //fields: ['email', 'password']
})(
    connect(null, actions)(Signin)
);
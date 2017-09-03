import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class Signin extends Component {
    handleFormSubmit(email, password){
        console.log(email, password);
        // Need to do something to log user in
    }

    render(){
        const { handleSubmit, fields } = this.props;
        const { email, password } = fields;
        console.log('rpops', this.props)
        console.log('email->', email);
        console.log('password->', password);
        return (
            <form onSubmit={handleSubmit(() => this.handleFormSubmit(email, password))}>
                <fieldset className="form-group">
                    <label>Email:</label>
                    <input type="text" {...email} className="form-control" />
                </fieldset>
                <fieldset className="form-group">
                    <label>Password:</label>
                    <input type="password" {...password} className="form-control" />
                </fieldset>
                <button action="submit" className="btn btn-primary">Sign in</button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'signin',
    fields: ['email', 'password']
})(Signin);
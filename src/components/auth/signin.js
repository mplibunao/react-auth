import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Header from "../header";

class Signin extends Component {

    renderField(field){
        return (
            <fieldset className="form-group">
                <label>{field.label}</label>
                <input type={field.type}
                    className="form-control"
                    {...field.input}
                />
            </fieldset>
        );
    }

    handleFormSubmit = (values) => {
        // Need to do something to log user in
        this.props.signinUser(values, () => {
            this.props.history.push('/feature');
        });
    }

    renderAlert() {
        const { errorMessage } = this.props;
        if (errorMessage) {
            return (
                <div className="alert alert-danger">
                    <strong>Ooops! </strong> {errorMessage}
                </div>
            );
        }
    }

    render(){
        const { handleSubmit } = this.props;
        return (
            <div>
                <Header />
                {/* Arrow function causes values not to be found; Either use bind or arrow function like above ^ */}
                <form onSubmit={handleSubmit(this.handleFormSubmit)}>
                    <Field
                        label="Email:"
                        name="email"
                        type="text"
                        component={this.renderField}
                    />
                    <Field
                        label="Password:"
                        name="password"
                        type="password"
                        component={this.renderField}
                    />
                    {this.renderAlert()}
                    <button action="submit" className="btn btn-primary">Sign in</button>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { errorMessage: state.auth.error };
}

export default reduxForm({
    form: 'signin',
    //fields: ['email', 'password']
})(
    connect(mapStateToProps, actions)(Signin)
);
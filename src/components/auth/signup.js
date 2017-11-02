import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import * as actions from "../../actions";
import Header from "../header";

class Signup extends Component {
    render() {
        return (
            <div>
                <Header />
                <div>Sign up</div>
            </div>
        );
    }
}

export default Signup;
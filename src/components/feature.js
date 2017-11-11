import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import Header from "./header";

class Feature extends Component {
    componentWillMount() {
        this.props.fetchMessage();
    }
    
    render() {
        return (
            <div>
                <Header />
                <div>{this.props.message}</div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        message: state.auth.message
    };
}

export default connect(mapStateToProps, actions)(Feature);
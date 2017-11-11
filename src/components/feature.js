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
                <div>This is a feature</div>
            </div>
        )
    }
}

export default connect(null, actions)(Feature);
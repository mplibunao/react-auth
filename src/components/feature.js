import React, { Component } from "react";
import Header from "./header";

class Feature extends Component {
    render() {
        return (
            <div>
                <Header />
                <div>This is a feature</div>
            </div>
        )
    }
}

export default Feature;
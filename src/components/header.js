import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
    renderLinks() {
        const { authenticated } = this.props;
        if (authenticated) {
            return <li className="nav-item"><Link to="/signout">Sign Out</Link></li>;
        }
        return <li className="nav-item"><Link to="/signin">Sign in</Link></li>;
    }

    render(){
        return (
            <nav className="navbar navbar-light">
                <Link to="/" className="navbar-brand">Home</Link>
                <ul className="nav navbar-nav">
                    {this.renderLinks()}
                </ul>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    const { authenticated } = state.auth;
    return {
        authenticated
    };
}

export default connect(mapStateToProps, null)(Header);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
    renderLinks() {
        const { authenticated } = this.props;
        if (authenticated) {
            return [
                <li key={1} className="nav-item"><Link className="nav-link" to="/signout">Sign Out</Link></li>
            ];
        }
        return [
            <li key={1} className="nav-item"><Link className="nav-link" to="/signin">Sign in</Link></li>,
            <li key={2} className="nav-item"><Link className="nav-link" to="/signup">Sign Up</Link></li>,
        ];
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
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
    renderLinks() {
        const { authenticated } = this.props;
        if (authenticated) {
            return [
                <li className="nav-item"><Link className="nav-link" to="/signout">Sign Out</Link></li>,
                <li className="nav-item"><Link className="nav-link" to="/signup">Sign Up</Link></li>,
            ];
        }
        return [
        <li className="nav-item"><Link className="nav-link" to="/signin">Sign in</Link></li>,
        <li className="nav-item"><Link className="nav-link" to="/signup">Sign Up</Link></li>,
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
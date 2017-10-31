import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
    render(){
        const { authenticated } = this.props;
        const showHeader = authenticated ? <li className="nav-item">Welcome!</li> : <li className="nav-item"><Link to="/signin">Sign in</Link></li>;
        return (
            <nav className="navbar navbar-light">
                <Link to="/" className="navbar-brand">Home</Link>
                <ul className="nav navbar-nav">
                    {showHeader}
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
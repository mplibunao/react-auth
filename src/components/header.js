import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
    render(){
        const { authenticated } = this.props;
        const showHeader = authenticated ? <div>Welcome!</div> : <Link to="/signin">Sign in</Link>;
        return (
            <nav className="navbar navbar-light">
                <ul className="nav navbar-nav">
                    <li className="nav-item">
                        {showHeader}
                    </li>
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
import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div>
            <div className="header">
                <a href="#default" className="logo">CompanyLogo</a>
                <div class="header-right">
                    <a className="active" href="#home">Home</a>
                    <a href="#contact">Contact</a>
                    <a href="#about">About</a>
                </div>
            </div>
            <div style={{paddingLeft    :   '20px'}}>
                <h1>Responsive Header</h1>
                <p>Resize the browser window to see the effect.</p>
                <p>Some content..</p>
            </div>
            </div>
        );
    }
}

export default Header;
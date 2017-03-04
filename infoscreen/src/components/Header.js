import React, { Component } from 'react';
import "../stylesheets/Header.css";

class Header extends Component {

    render(){
        return(
            <div className="Header">
                <h1>{this.props.city}</h1>
            </div>
        )
    }
}

export default Header;
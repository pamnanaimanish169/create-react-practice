import React, { Component } from 'react';
import './Card.css';

class Card extends Component    {
    render()    {
        return  (
            <div style={{paddingLeft:20}}>
                <div className="card">
                    <img src={'img/img_avatar.png'} alt="Avatar" className="width" />
                    <div className="container">
                        <h4><b>John Doe</b></h4> 
                        <p>sdfsdfsd</p> 
                    </div>
                </div> 
            </div>
        )
    }
}

export default Card;
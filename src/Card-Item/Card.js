import React, { Component } from 'react';
import './Card.css';
import $ from 'jquery';


class Card extends Component    {
    componentDidMount() {
        $('.carousel').carousel({
            interval : 2000,
            items   : 3
          })

          
    }
    render()    {
        return  (
            // <div style={{paddingLeft:20}}>
            //     <div className="card">
            //         <img src={'img/img_avatar.png'} alt="Avatar" className="width" />
            //         <div className="container">
            //             <h4><b>John Doe</b></h4> 
            //             <p>sdfsdfsd</p> 
            //         </div>
            //     </div> 
            // </div>
            <div>
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={'img/img_avatar.png'} className="d-block w-100" alt="" />
                        </div>

                        <div className="carousel-item">
                            <img src={'img/img_avatar.png'} className="d-block w-100" alt="" />
                        </div>

                        <div className="carousel-item">
                            <img src={'img/img_avatar.png'} className="d-block w-100" alt="" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        )
    }
}

export default Card;
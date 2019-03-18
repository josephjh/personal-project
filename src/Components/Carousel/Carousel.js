import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
 
class backCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt='Tacoma'/>
                    <p className="Toyota1">Legend 1</p>
                </div>
                {/* <div>
                    <img src="assets/2.jpeg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div> */}
            </Carousel>
        );
    }
};

export default backCarousel

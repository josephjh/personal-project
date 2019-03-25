import React from "react";
import { Carousel } from "react-responsive-carousel";

export default () => (
  <Carousel autoPlay>
    <div>
    <img src='https://images.pexels.com/photos/1149055/pexels-photo-1149055.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='Toyota'/>
    {/* <p className="legend"></p> */}
    </div>
    <div>
    <img src='https://images.pexels.com/photos/1450230/pexels-photo-1450230.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='Defender'/>
    {/* <p className="legend"></p> */}
    </div>
    <div>
    <img src='https://images.unsplash.com/photo-1500381369072-1e8259ca5ed4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1504&q=80' alt='Land Cruiser'/>
    {/* <p className="legend"></p> */}
    </div>
    <div>
    <img src='https://images.pexels.com/photos/1149058/pexels-photo-1149058.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='Chevy'/>
    {/* <p className="legend"></p> */}
    </div>
    <div>
    <img src='https://images.pexels.com/photos/1149129/pexels-photo-1149129.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='Crawling Jeep'/>
    {/* <p className="legend"></p> */}
    </div>
    
  </Carousel>
);


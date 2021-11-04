import React from "react";

import {Button, Carousel} from 'react-bootstrap';
import Footer from"./Footer";
import CarbFix from "./CarbFix";
import Climeworks from "./Climeworks";


function Slide(props){


return (

<div class="imagine">
  <Carousel>
    <Carousel.Item>
      <img 
        className="d-block w-100"
        src={props.image1}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3 class="hSlide">{props.slide1H3}</h3>
        <p class="slideText">{props.slide1P}</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={props.image2}
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3 class="hSlide">{props.slide2H3}</h3>
        <p class="slideText">{props.slide2P}</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={props.image3}
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3 class="hSlide">{props.slide3H3}</h3>
        <p class="slideText">{props.slide3P}</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>



</div>





);



};

export default Slide;

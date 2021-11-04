import React, { useState, useEffect }  from "react";
import Header from "./Header";
import {Button, Carousel} from 'react-bootstrap';
import Home from "./Home";
import Slide from "./Slide";
import Footer from"./Footer";

function CarbonEngineering(){




useEffect( () => { document.querySelector("body").classList.add("carbon") } );






  return(

    <div>
    <Header/>




        <Slide

    image1="https://carbonengineering.com/wp-content/themes/carbon-engineering/img/home/bg-next.jpg"

    image2="https://carbonengineering.com/wp-content/themes/carbon-engineering/img/technology/photo1.jpg"

    image3="https://carbonengineering.com/wp-content/themes/carbon-engineering/img/technology/new-diagram2.png"


    slide1H3="Goals"

    slide1P="CE was founded more than a decade ago with the mission to develop and commercialize affordable and highly scalable carbon removal technology. "

    slide2H3= ""

    slide2P="World’s largest Direct Air Capture plant."

    slide3H3="Process"

    slide3P="air contactor, pellet reactor, slaker, and calciner - which collectively capture, purify, and compress atmospheric CO2"


        />



<Footer/>
</div>


  );
}
export default CarbonEngineering;

import React,{ useState, useEffect }  from "react";
import Header from "./Header";
import {Button, Carousel} from 'react-bootstrap';
import Home from "./Home";
import Footer from"./Footer";
import Slide from "./Slide";
function GlobalThermostat(){


useEffect( () => { document.querySelector("body").classList.add("global") } );

  return(

    <div>
    <Header/>




        <Slide

    image1="https://www.greenbiz.com/sites/default/files/media-inline/1._photograph_of_global_thermostats_sri_demo_plant_located_333_ravenswood_ave_menlo_park_ca._94025.jpg"

    image2="https://www.greenbiz.com/sites/default/files/images/articles/featured/4globalthermostatsceodrgracielachichilniskyatsridemoplantat333ravenswoodavemenloparkca94025.jpg"

    image3="https://www.greenbiz.com/sites/default/files/media-inline/peter_eisenberger_headshot.jpg"


    slide1H3=""

    slide1P="Global Thermostat’s patented breakthrough technology removes CO2 from ambient air or other sources utilizing readily available, low-cost process heat."

    slide2H3= "Dr. Graciela Chichilnisky
Chief Executive Officer & Co-Founder"

    slide2P=""

    slide3H3="Dr. Peter Eisenberger
Chief Science Officer & Co-Founder"

    slide3P=""


        />


<Footer/>
</div>


  );
}
export default GlobalThermostat;

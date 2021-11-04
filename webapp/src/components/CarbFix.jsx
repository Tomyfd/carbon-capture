import React,{ useState, useEffect }  from "react";
import Header from "./Header";

import Home from "./Home";
import {Button, Carousel} from 'react-bootstrap';


import Slide from "./Slide";
import Footer from"./Footer";



function CarbFix(){



useEffect( () => { document.querySelector("body").classList.add("carb") } );



  return(
    <div>
    <Header/>
    <Slide

image1="https://prismic-io.s3.amazonaws.com/carbfix/98b4d6ad-26dc-4ff3-90ca-74c13edbe31a_Orca.png"

image2="https://images.prismic.io/carbfix/2bc35dde-eabc-4446-a9b0-d72a6229e854_Timeline-illustrator.png?auto=compress,format"

image3="https://images.prismic.io/carbfix/f661ad63-66a3-4601-8e1c-ccb70d82a378_cw.jpg?auto=compress,format&rect=0,219,2880,1650&w=2880&h=1650"


slide1H3="Orca"

slide1P="The power plant supplies renewable energy to the DAC process, whilst Carbfix provides a permanent and safe storage solution for the captured atmospheric CO2."

slide2H3= ""

slide2P=""

slide3H3="Process"

slide3P="Remove carbon dioxide from the air with direct air capture machines. Carbfix then mixes the carbon dioxide with water and pumps it deep underground. "


    />






    <Footer/>


</div>
  );
}
export default CarbFix;

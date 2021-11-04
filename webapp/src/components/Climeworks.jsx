import React,{ useState, useEffect }  from "react";
import Header from "./Header";
import {Button, Carousel} from 'react-bootstrap';
import Home from "./Home";
import Footer from"./Footer";
import Slide from "./Slide";




function Climeworks(){

useEffect( () => { document.querySelector("body").classList.add("clime") } );

  return(
    <div>
    <Header/>


    <Slide

image1="https://images.prismic.io/climeworkscom/7705be0a-87fb-458c-8ff1-36a8383c34d1_20170510DSC_6481_PhotosbyJuliaDunlop-2+small_withoutJS.jpg?auto=compress,format&rect=0,0,1999,1335&w=1300&h=868"

image2="https://images.prismic.io/climeworkscom/b8bf1444-1f97-46b9-8edf-db652205b4b2_Climeworks+direct+air+capture+%26+storage+plant+Orca_3.jpg?auto=compress,format&rect=0,0,3542,2362&w=1300&h=867"

image3="https://images.prismic.io/climeworkscom/20ae157a-fc15-4a0d-966e-8d91bfb15f4d_Comp+4.gif?auto=compress,format"


slide1H3="CO2 Collectors"

slide1P="Leading scientific studies indicate that by mid-century 10 billion tons of carbon dioxide will need to be removed from the air every year."

slide2H3= "Orca - Climework's new direct air capture and storage plant in Iceland"

slide2P="Orca will capture 4000 tons of CO₂ per year - making it the world's biggest climate-positive facility to date."

slide3H3="Process"

slide3P="Remove carbon dioxide from the air with our direct air capture machines. Carbfix then mixes the carbon dioxide with water and pumps it deep underground. "


    />




<Footer/>
</div>




  );
}
export default Climeworks;

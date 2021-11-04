import React,{ useState, useEffect }  from "react";
import Header from "./Header";
import {Button, Carousel} from 'react-bootstrap';
import Home from "./Home";
import Footer from"./Footer";
import Slide from "./Slide";
function Quest(){


useEffect( () => { document.querySelector("body").classList.add("quest") } );

  return(
    <div>
    <Header/>





        <Slide

    image1="https://www.canadianmanufacturing.com/wp-content/uploads/2020/07/Shell_Canada_Limited_Quest_CCS_Facility_Captures_and_Stores_Five.jpg"

    image2="https://www.shell.ca/en_ca/about-us/projects-and-sites/quest-carbon-capture-and-storage-project/discover-more-about-ccs/_jcr_content/par/tabbedcontent/tab_382635289/textimage/image.img.960.jpeg/1480463856335/pipeline-at-co2-injection-well.jpeg?imformat=chrome&imwidth=640"

    image3="https://www.shell.ca/en_ca/about-us/projects-and-sites/quest-carbon-capture-and-storage-project/discover-more-about-ccs/_jcr_content/par/tabbedcontent/tab_1716615655/textimage/image.img.960.jpeg/1499129138515/employee-at-quest-carbon-capture-unit.jpeg?imformat=chrome&imwidth=384"


    slide1H3="The Quest Carbon Capture and Storage Project captures and stores underground one million tonnes of CO2 emissions per year."

    slide1P="Quest uses a combination of existing technologies and applies them in a new way to inject the CO2 underground."

    slide2H3= ""

    slide2P="Shell is committed to demonstrating over the life of the Quest project that the CO2 captured and injected remains safely and permanently stored. "

    slide3H3="Goals"

    slide3P="capture, transport and storage – and could account for one sixth of total CO2 emissions reductions required by 2050, according to the International Energy Agency."


        />






<Footer/>
</div>



  );
}
export default Quest;

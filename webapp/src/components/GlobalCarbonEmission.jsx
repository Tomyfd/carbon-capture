import React,{ useState, useEffect }  from "react";
import Header from "./Header";
import {Button, Carousel} from 'react-bootstrap';
import Home from "./Home";
import Footer from"./Footer";
import Slide from "./Slide";





function GlobalCarbonEmission(){



useEffect( () => { document.querySelector("body").classList.add("GlobalCarbonEmission") } );



  return(
<div>
    <Header/>

<img src="https://ourworldindata.org/uploads/2019/10/Annual-CO2-emissions-Treemap-1-603x550.png" alt="global emissions per country"/>
<img src="https://www.epa.gov/sites/default/files/styles/medium/public/2016-05/global_emissions_gas_2015.png?VersionId=.qM5SHMiHj8smf8eccBXAqfg9FjgOczx&itok=jhk0EcIN" alt="Greenhouse emissions by gas"/>
<img src="https://www.epa.gov/sites/default/files/2017-04/fossil_fuels_1.png" alt="Trend in emissions"/>

<Footer/>
</div>



  );
}
export default GlobalCarbonEmission;

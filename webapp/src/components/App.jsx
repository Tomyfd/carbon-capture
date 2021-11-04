import React from "react";
import Header from "./Header";
import Button from 'react-bootstrap/Button'
import Home from "./Home";
import Main from "./Main";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Climeworks from "./Climeworks";
import CarbonEngineering from "./CarbonEngineering";
import CarbFix from "./CarbFix";
import GlobalThermostat from "./GlobalThermostat";
import Quest from "./Quest";
import GlobalCarbonEmission from "./GlobalCarbonEmission";
import Contact from "./Contact";
import Administratornice from "./Administratornice";


function App(){

return(
<div>

    <Router>


    <Switch>
    <Route exact path="/Climeworks" component={Climeworks}/>
    <Route exact path="/CarbonEngineering" component={CarbonEngineering}/>
    <Route exact path="/CarbFix" component={CarbFix}/>
    <Route exact path="/GlobalThermostat" component={GlobalThermostat}/>
    <Route exact path="/GlobalCarbonEmission" component={GlobalCarbonEmission}/>
    <Route exact path="/Quest" component={Quest}/>
    <Route exact path="/Main" component={Main}/>
    <Route exact path="/" component={Main}/>
      <Route exact path="/Contact" component={Contact}/>
      <Route exact path="/Administratornice" component={Administratornice}/>
    </Switch>

    </Router>
</div>
);



}
export default App;

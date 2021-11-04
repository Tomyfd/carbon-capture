import React, { useState } from "react";
import {Button, Form} from 'react-bootstrap';

import Header from "./Header";
import {useForm} from "react-hook-form";
import Contact from "./Contact";


function Administratornice(props){

return (
<div>

<Header/>
<h1>{props.emails}</h1>



</div>
);



}
export default Administratornice;

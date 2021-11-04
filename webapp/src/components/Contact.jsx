import React, { useState } from "react";
import {Button, Form} from 'react-bootstrap';

import Header from "./Header";
import {useForm} from "react-hook-form";
import Administratornice from "./Administratornice";
import { MongoClient } from 'mongodb';

function Contact(){

const {register,handleSubmit} = useForm();
const [email, setemail] = useState("");

const onSubmit = (data) => {
  console.log(data)
  let submissions = data;



  setemail(submissions.emaileRequired);
  console.log(submissions);
}

return (
<div>
  <Header/>

  <Form onSubmit={handleSubmit(onSubmit)}>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="name@example.com" {...register("emaileRequired",{ required: true })} />
    </Form.Group>


    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>Message</Form.Label>
      <Form.Control as="textarea" rows={3} {...register("message")} />
    </Form.Group>
    <button type="submit" href="/Administratornice" >Send</button>


  </Form>
  </div>
);
}

export default Contact;

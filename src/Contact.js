import React from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router";

const Contact = () => {
    const history = useHistory();
    return (
        <>
        <div className="contant_main">
            <h1>Contact Us</h1>
            <br/>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="name" style={{width: "320px" }}/>
                </Form.Group>
                
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" placeholder="mobile number" style={{width: "320px" }}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" style={{width: "320px" }}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Message</Form.Label>
                    <Form.Control type="text"  style={{width: "320px" }}/>
                </Form.Group>

                <Button variant="primary" style={{backgroundColor:"#6b2be2"}} type="submit" onClick={(e)=> {e.preventDefault();alert("thank you for feedBack");history.push("/")}}>
                    Submit
                </Button>
            </Form>
            <br/>
        </div>
        </>
    );
}

export default Contact;
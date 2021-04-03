import React from "react";
import { Button, Card, Col } from "react-bootstrap";

const Cardui = (props) => {
    return (
        <Col className="col-md-4 col-10 mt-5">
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.imgsrc}/>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.desp}
                </Card.Text>
                <Button className="btn btn-outline-primary button">Learn more</Button>
            </Card.Body>
        </Card>
        </Col>
    );
};

export default Cardui;
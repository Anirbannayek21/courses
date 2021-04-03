import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";


const Common = (props) => {
    return (
        <>
            <Container className="my-5">
                <Row className="content">
                    <Col className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                        <h1>{props.title}</h1>
                        <h1 className="brand-name" style={{ color: "#6b2be2" }}>{props.name}</h1>
                        <p className="my-3">{props.para}</p>
                        <div className="mt-3">
                            <NavLink className="btn btn-outline-primary button" to={props.link}>{props.btn}</NavLink>
                        </div>
                    </Col>
                    <Col className="col-lg-6 order-1 order-lr-2">
                        <img src={props.img} className="center" alt="img" />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Common;
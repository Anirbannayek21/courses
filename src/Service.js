import React from "react";
import { Container, Row,Col } from "react-bootstrap";
import Cardui from "./Cardui";
import sdata from "./Sdata"
const Service= () =>{
    return (
        <>
        <div className="text-center">
            <h1 style={{color:"#6b2be2"}}>Our Services</h1>
            <Container className="mb-5">
                <Row>
                    <Col className="col-10 mx-auto">
                        <Row className="gy-4">
                            {sdata.map((value)=><Cardui 
                            imgsrc={value.imgSrc}
                            title={value.title}
                            desp = {value.desp}/>)}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    );
}

export default Service;
import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ErrorSvg from "../../asset/image/error.svg";

class WengWrong extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center mt-5">
                    <Row>
                        <Col>
                            <img className="LoaderAnimation" src={ErrorSvg}/>
                            <h3 className="text-danger">Something Went Wrong!</h3>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default WengWrong;
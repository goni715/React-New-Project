import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import LoadingSvg from '../../asset/image/loader.svg';

class Loading extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <Row>
                        <Col>
                              <img className="LoaderAnimation" src={LoadingSvg}/>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Loading;
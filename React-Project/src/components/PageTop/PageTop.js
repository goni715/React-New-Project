import React, { Component, Fragment } from 'react';
import '../../asset/css/custom.css';
import '../../asset/css/bootstrap.min.css';
import {Container,Row,Col,Button} from "react-bootstrap";

class TopBanner extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topFixedPage p-0">

                    <div className="topPageOverlay">

                        <Container className="topPageContent">
                            <Row>
                                <Col className="text-center">
                                    <h4 className="topPageTitle">{this.props.topPageTitle}</h4>
                                </Col>
                            </Row>

                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default TopBanner;
import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import RestClient from "../../RestApiServices/RestClient";
import AppUrl from "../../RestApiServices/AppUrl";
import HTMLReactParser from "html-react-parser";
import Loading from "../Loading/Loading";
import WengWrong from "../WentWrong/WengWrong";

class PrivacyDescription extends Component {

    constructor() {
        super();
        this.state={
            privacyDescription:"",
            loading:true,
            error:false
        }
    }


    componentDidMount() {

        RestClient.GetRequest(AppUrl.InformationSelect).then((result)=>{

            if(result==null){

                this.setState({error:true});
            }
            else {

                let myJsonData = result;
                let privacy_desc = myJsonData[0].privacy;

                this.setState({privacyDescription: privacy_desc, loading: false});
            }

        }).catch((error)=>{

            this.setState({error:true});
        })


    }





    render() {

        if(this.state.error == false){

            if(this.state.loading == true){

                return (
                    <Fragment>
                        <Loading></Loading>
                    </Fragment>
                )
            }
            else
            {


                return (

                    <Fragment>

                        <Container className="mt-5">
                            <Row>
                                <Col sm={12} lg={12} md={12}>

                                    {HTMLReactParser(this.state.privacyDescription)}

                                </Col>
                            </Row>
                        </Container>


                    </Fragment>
                );
            }//ElseEnded

        }
        else{

            return (
                <Fragment>
                    <WengWrong></WengWrong>
                </Fragment>
            )


        }//ErrorConditionEnded
    }
}

export default PrivacyDescription;
import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import RestClient from "../../RestApiServices/RestClient";
import AppUrl from "../../RestApiServices/AppUrl";
import HTMLReactParser from "html-react-parser";
import Loading from "../Loading/Loading";
import WengWrong from "../WentWrong/WengWrong";

class AboutDescription extends Component {


    constructor() {
        super();
        this.state={
            aboutDescription:"",
            loading:true,
            error:false
        }
    }



    componentDidMount() {

        RestClient.GetRequest(AppUrl.InformationSelect).then((result)=>{

            if(result==null){
                this.setState({error:true})
            }
            else{

                let myJsonData = result;
                let about_desc = myJsonData[0].about;
                this.setState({aboutDescription:about_desc, loading:false})

            }

        }).catch((error)=>{
            this.setState({error:true})
        })


    }




    render() {


        if(this.state.error == false) {

            if (this.state.loading == true) {

                return (
                    <Fragment>
                        <Loading></Loading>
                    </Fragment>
                )

            }
            else{


                return (
                    <Fragment>

                        <Container className="mt-5">
                            <Row>
                                <Col sm={12} lg={12} md={12}>

                                    {HTMLReactParser(this.state.aboutDescription)}

                                </Col>
                            </Row>
                        </Container>

                    </Fragment>
                );

             }//LoadingElseEnded

        }else{

            return (
                <Fragment>
                    <WengWrong></WengWrong>
                </Fragment>
            )

        }//ErrorConditionEnded


    }
}

export default AboutDescription;
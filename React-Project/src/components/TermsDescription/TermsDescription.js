import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import RestClient from "../../RestApiServices/RestClient";
import AppUrl from "../../RestApiServices/AppUrl";
import HTMLReactParser from "html-react-parser";
import Loading from "../Loading/Loading";
import WengWrong from "../WentWrong/WengWrong";

class TermsDescription extends Component {


    constructor() {
        super();
        this.state={
            termsDescription:"",
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
                let terms_desc = myJsonData[0].terms;

                this.setState({termsDescription: terms_desc, loading: false})
            }

        }).catch((error)=>{

            this.setState({error:true});
        })


    }





    render() {

        if(this.state.error == false) {

             if(this.state.loading==true){

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

                                {HTMLReactParser(this.state.termsDescription)}

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

export default TermsDescription;
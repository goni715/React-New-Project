import React, { Component, Fragment } from 'react';
import '../../asset/css/custom.css';
import '../../asset/css/bootstrap.min.css';
import {Container,Row,Col,Button} from "react-bootstrap";
import axios from "axios";
import RestClient from "../../RestApiServices/RestClient";
import AppUrl from "../../RestApiServices/AppUrl";
import Loading from "../Loading/Loading";
import WengWrong from "../WentWrong/WengWrong";


class TopBanner extends Component {


    constructor() {
        super();

        this.state={
            title:"",
            subTitle:"",
            loaderClass:"text-center",
            mainDivClass:"d-none",
            errorClass:"d-none"

        }


    }





    componentDidMount() {


        RestClient.GetRequest(AppUrl.SelectHomeTopTitle).then((result)=>{

            if(result == null){

                this.setState({loaderClass:"d-none",  errorClass:"text-center"});

            }
            else{

                let selectedTitle = result[0].home_title;
                let selectedSubTitle = result[0].home_subtitle;

                this.setState({
                    title: selectedTitle,
                    subTitle: selectedSubTitle,
                    loaderClass: "d-none",
                    mainDivClass: "text-center",
                    errorClass:"d-none"

                });
            }

        }).catch((error)=>{

            this.setState({loaderClass:"d-none",  errorClass:"text-center"});

        })



    }



    render() {
        return ( 
            <Fragment>
                <Container fluid={true} className="topFixedBanner p-0">
                
                     <div className="topBannerOverlay">

                           <Container className="topContent">

                               <Row>

                                   <Col className={this.state.errorClass}>
                                       <WengWrong></WengWrong>
                                   </Col>

                                   <Col className={this.state.loaderClass}>
                                       <Loading></Loading>
                                   </Col>

                                  <Col className={this.state.mainDivClass}>
                                      <h1 className="topTitle">{this.state.title}</h1>
                                      <h1 className="topSubTitle">{this.state.subTitle}</h1>
                                      <Button variant="primary" href="//www.codesilicon.com" target="_blank">More Info</Button>
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
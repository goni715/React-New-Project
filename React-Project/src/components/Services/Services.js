import React, { Component, Fragment } from 'react';
import {Container,Row,Col,Button,Card} from "react-bootstrap";
import '../../asset/css/custom.css';
import '../../asset/css/bootstrap.min.css';

import webLogo from '../../asset/image/web.svg';
import graphicsLogo from '../../asset/image/graphics.svg';
import mobileLogo from '../../asset/image/mobile.svg';

import RestClient from "../../RestApiServices/RestClient";
import AppUrl from "../../RestApiServices/AppUrl";
import Loading from "../Loading/Loading";
import WengWrong from "../WentWrong/WengWrong";


class Services extends Component {


    constructor() {
        super();
        this.state={
            myJsonData:[],
            loading:true,
            error:false
        }
    }



    componentDidMount() {

         RestClient.GetRequest(AppUrl.ServiceSelect).then((result)=>{

              if(result==null){

                  this.setState({error:true});
              }
              else{

                 this.setState({myJsonData: result, loading: false});
              }

         }).catch((error)=>{

             this.setState({error:true});
         })
    }


    render() {


        if(this.state.error == false) {

            if(this.state.loading == true){

                return (
                    <Fragment>
                        <Loading></Loading>
                    </Fragment>
                )

            }
            else{

                const myList = this.state.myJsonData;
                const myView = myList.map((item, i) => {


                    return (

                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard text-center">
                                <img className="img" src={myList[i].service_logo}/>
                                <h2 className="serviceName">{myList[i].service_name}</h2>
                                <p className="serviceDescription">{myList[i].service_description}</p>
                            </div>
                        </Col>

                    )


                })


                return (
                    <Fragment>
                        <Container className="text-center">
                            <h1 className="serviceMainTitle">MY SERVICES</h1>
                            <Row>

                                {myView}

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

export default Services;
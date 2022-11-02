import { ReactDOM } from 'react';
import React, { Component, Fragment } from 'react';
import {Container,Row,Col,Card} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import RestClient from "../../RestApiServices/RestClient";
import AppUrl from "../../RestApiServices/AppUrl";
import Loading from "../Loading/Loading";
import WengWrong from "../WentWrong/WengWrong";

class Summary extends Component {


    constructor() {
        super();
        this.state={

            totalProject:"",
            totalClient:"",
            loading:true,
            error:false
        }
    }




     componentDidMount() {

         RestClient.GetRequest(AppUrl.SelectTotalProjectClient).then((result)=>{

             if(result==null){

                 this.setState({error:true});
             }
             else{

                 let myJsonData = result;
                 let Total_Project = myJsonData[0].total_project;
                 let Total_Client = myJsonData[0].total_client;

                 this.setState({
                     totalProject: Total_Project,
                     totalClient: Total_Client,
                     loading: false
                 });
             }

         }).catch(()=>{

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

            }else {

                return (

                    <Fragment>

                        <Container fluid={true} className="SummaryBanner SummarySection p-0">

                            <div className="SummaryBannerOverlay">

                                <Container className="text-center">

                                    <Row>

                                        <Col lg={8} md={6} sm={12}>
                                            <Row className="countSection">
                                                <Col>
                                                    <h1 className="countNumber">

                                                        <CountUp start={0} end={this.state.totalProject}>
                                                            {({countUpRef, start}) => (


                                                                <VisibilitySensor onChange={start} delayedCall>
                                                                    <span ref={countUpRef}/>
                                                                </VisibilitySensor>

                                                            )}
                                                        </CountUp>

                                                    </h1>
                                                    <h4 className="countTitle">Total Projects</h4>
                                                    <hr className="bg-white w-25"/>
                                                </Col>

                                                <Col>
                                                    <h1 className="countNumber">

                                                        <CountUp start={0} end={this.state.totalClient}>
                                                            {({countUpRef, start}) => (


                                                                <VisibilitySensor onChange={start}>
                                                                    <span ref={countUpRef}/>
                                                                </VisibilitySensor>

                                                            )}
                                                        </CountUp>


                                                    </h1>
                                                    <h4 className="countTitle">Total Clients</h4>
                                                    <hr className="bg-white w-25"/>
                                                </Col>

                                            </Row>
                                        </Col>


                                        <Col lg={4} md={6} sm={12}>
                                            <Card className="workCard">
                                                <Card.Body>
                                                    <Card.Title className="cardTitle text-justify">How I
                                                        Work</Card.Title>
                                                    <Card.Text>
                                                        <p className="cardSubTitle text-justify"><FontAwesomeIcon
                                                            className="iconBullet" icon={faCircleCheck}/> Requirement
                                                            Gathering</p>
                                                        <p className="cardSubTitle text-justify"><FontAwesomeIcon
                                                            className="iconBullet" icon={faCircleCheck}/> System
                                                            Analysis
                                                        </p>
                                                        <p className="cardSubTitle text-justify"><FontAwesomeIcon
                                                            className="iconBullet" icon={faCircleCheck}/> Coding Testing
                                                        </p>
                                                        <p className="cardSubTitle text-justify"><FontAwesomeIcon
                                                            className="iconBullet" icon={faCircleCheck}/> Implementation
                                                        </p>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>

                                        </Col>


                                    </Row>
                                </Container>

                            </div>
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

export default Summary;
import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faYoutube} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import RestClient from "../../RestApiServices/RestClient";
import AppUrl from "../../RestApiServices/AppUrl";
import Loading from "../Loading/Loading";
import WengWrong from "../WentWrong/WengWrong";


class Footer extends Component {

    constructor() {
        super();
        this.state={
            Address:"",
            Email:"",
            Phone:"",
            Facebook_Link:"",
            Youtube_Link:"",
            Footer_Credit:"",
            loading:true,
            error:false

        }
    }



    componentDidMount() {

        RestClient.GetRequest(AppUrl.FooterSelect).then((result)=>{

            if(result==null){
                this.setState({error:true})
            }
            else{

                let myJsonData = result;
                let address = myJsonData[0].address;
                let email = myJsonData[0].email;
                let phone = myJsonData[0].phone;
                let facebook_link = myJsonData[0].facebook_link;
                let youtube_link = myJsonData[0].youtube_link;
                let footer_credit = myJsonData[0].footer_credit;


                this.setState({
                    Address:address,
                    Email:email,
                    Phone:phone,
                    Facebook_Link:facebook_link,
                    Youtube_Link:youtube_link,
                    Footer_Credit:footer_credit,
                    loading:false

                })

            }

        }).catch((error)=>{
            this.setState({error:true})
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

                return (
                    <Fragment>
                        <Container fluid={true} className="text-center p-4 footerSection">
                            <Container>
                             <Row>

                                <Col lg={3} md={6} sm={12} className="p-2 text-justify">
                                    <h1 className="serviceName">Follow Me</h1>
                                    <a className="socialLink" target="_blank" href={"//" + this.state.Facebook_Link}>
                                        <FontAwesomeIcon icon={faFacebook}/> Facbook</a> <br/>
                                    <a className="socialLink" target="_blank" href={"//" + this.state.Youtube_Link}>
                                        <FontAwesomeIcon icon={faYoutube}/> Youtube</a>
                                </Col>

                                <Col lg={3} md={6} sm={12} className="p-2 text-justify">
                                    <h1 className="serviceName">Address</h1>
                                    <p className="serviceDescription">{this.state.Address}</p>
                                    <p className="serviceDescription"><FontAwesomeIcon
                                        icon={faEnvelope}/> {this.state.Email}</p>
                                    <p className="serviceDescription"><FontAwesomeIcon
                                        icon={faPhone}/> {this.state.Phone}
                                    </p>
                                </Col>

                                <Col lg={3} md={6} sm={12} className="p-2 text-justify">
                                    <h1 className="serviceName">Information</h1>
                                    <Link className="footerLink" to="/About">About Me</Link><br/>
                                    <Link className="footerLink" to="/Contact">Contact Me</Link>
                                </Col>

                                <Col lg={3} md={6} sm={12} className="p-2 text-justify">
                                    <h1 className="serviceName">Legal</h1>
                                    <Link className="footerLink" to="/Refund">Refund Policy</Link><br/>
                                    <Link className="footerLink" to="/Terms">Terms And Condition</Link><br/>
                                    <Link className="footerLink" to="/Privacy">Privacy Policy</Link>
                                </Col>

                             </Row>
                            </Container>
                        </Container>

                        <Container fluid={true} className="text-center copyRightSection">
                            <a href="" className="copyRightLink">{this.state.Footer_Credit}</a>
                        </Container>

                    </Fragment>
                );
            }//ElseEnded

        }else{

            return (
                <Fragment>
                    <WengWrong></WengWrong>
                </Fragment>
            )

        }//ErrorConditionEnded


    }
}

export default Footer;
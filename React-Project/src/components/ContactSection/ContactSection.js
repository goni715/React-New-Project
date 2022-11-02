import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import RestClient from "../../RestApiServices/RestClient";
import AppUrl from "../../RestApiServices/AppUrl";
import Loading from "../Loading/Loading";
import WengWrong from "../WentWrong/WengWrong";
import Swal from "sweetalert2";

class ContactSection extends Component {

    constructor() {
        super();
        this.state={
            Address:"",
            Email:"",
            Phone:"",
            loading:true,
            error:false
        }
    }


    componentDidMount() {

        RestClient.GetRequest(AppUrl.FooterSelect).then((result)=>{

            if(result==null){
                this.setState({error:true});
            }
            else{

                let myJsonData = result;
                let address = myJsonData[0].address;
                let email = myJsonData[0].email;
                let phone = myJsonData[0].phone;

                this.setState({
                    Address: address,
                    Email: email,
                    Phone: phone,
                    loading: false,


                })

            }

        }).catch((error)=>{

            this.setState({error:true});

        })
    }


    SendContactData(){

        var Name = document.getElementById("name").value;
        var Email = document.getElementById("email").value;
        var Message = document.getElementById("message").value;

        let URL = AppUrl.ContactDataInsert;
        let jsonObject ={
            name:Name,
            email:Email,
            message:Message
        };


        RestClient.PostRequest(URL,JSON.stringify(jsonObject)).then((result)=>{

            if(result == 1){

                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Data Send Success',
                    showConfirmButton: false,
                    timer: 2000
                })

                document.getElementById("name").value="";
                document.getElementById("email").value="";
                document.getElementById("message").value="";



            }else{


                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                    });

            }

        }).catch((error)=>{

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
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
                                <Col lg={6} md={6} sm={12}>
                                    <h1 className="serviceName">Quick Connect</h1>

                                    <Form>
                                        <Form.Group>
                                            <Form.Label className="serviceDescription">Name</Form.Label>
                                            <Form.Control id="name" type="text"/>
                                        </Form.Group>

                                        <Form.Group>
                                            <Form.Label className="serviceDescription">Email Addres</Form.Label>
                                            <Form.Control id="email" type="email"/>
                                        </Form.Group>

                                        <Form.Group>
                                            <Form.Label className="serviceDescription">Message</Form.Label>
                                            <Form.Control id="message" as="textarea" rows={3}/>
                                        </Form.Group>


                                        <Button onClick={this.SendContactData} variant="primary" className="mt-3">
                                            Submit
                                        </Button>
                                    </Form>

                                </Col>


                                <Col lg={6} md={6} sm={12} className="ContactAdress">
                                    <h1 className="serviceName">Discuss Now</h1>
                                    <p className="serviceDescription">{this.state.Address}</p>
                                    <p className="serviceDescription"><FontAwesomeIcon
                                        icon={faEnvelope}/> {this.state.Email}</p>
                                    <p className="serviceDescription"><FontAwesomeIcon
                                        icon={faPhone}/> {this.state.Phone}
                                    </p>
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

export default ContactSection;
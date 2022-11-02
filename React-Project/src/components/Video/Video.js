import React, { Component, Fragment } from 'react';
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import ReactPlayer from "react-player";
import RestClient from "../../RestApiServices/RestClient";
import AppUrl from "../../RestApiServices/AppUrl";
import Loading from "../Loading/Loading";
import WengWrong from "../WentWrong/WengWrong";


class Video extends Component {

   constructor(){
       super();

       this.state={
           show:false,
           video_description:"",
           video_url:"",
           loading:true,
           error: false
       }
   }



   modalOpen = () =>this.setState({show:true});
   modalClose = () =>this.setState({show:false});


   componentDidMount() {

        RestClient.GetRequest(AppUrl.SelectVideoHome).then((result)=>{

            if(result == null){

                this.setState({error: true});
            }
            else{

                let myJsonData = result;
                let Video_Desc = myJsonData[0].video_description;
                let Video_URL = myJsonData[0].video_url;

                this.setState({
                    video_description: Video_Desc,
                    video_url: Video_URL,
                    loading: false

                })
            }

        }).catch((error)=>{

            this.setState({error: true});
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
            else {

                return (


                    <Fragment>
                        <Container className="text-center">
                            <Row>
                                <Col className="videoCard" lg={12} md={12} sm={12}>

                                    <p className="videoTitle">How I Do</p>
                                    <p className="videoDes">{this.state.video_description}</p>
                                    <p><FontAwesomeIcon onClick={this.modalOpen} className="playBtn"
                                                        icon={faCirclePlay}/>
                                    </p>

                                </Col>
                            </Row>
                        </Container>


                        {/*Modal Part*/}

                        <Modal size="lg" show={this.state.show} onHide={this.modalClose}>

                            <Modal.Body>

                                <video width="100%" controls>
                                    <source src={this.state.video_url} type="video/mp4"/>
                                </video>

                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="primary" onClick={this.modalClose}>
                                    Close
                                </Button>

                            </Modal.Footer>
                        </Modal>


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

        }////ErrorConditionEnded
    }
}

export default Video;
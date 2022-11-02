import React, { Component, Fragment } from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import coursePic1 from '../../asset/image/course1.webp';
import coursePic2 from '../../asset/image/course2.jpeg';
import coursePic3 from '../../asset/image/course3.webp';
import coursePic4 from '../../asset/image/course4.webp';
import {Link} from "react-router-dom";
import RestClient from "../../RestApiServices/RestClient";
import AppUrl from "../../RestApiServices/AppUrl";
import Loading from "../Loading/Loading";
import WengWrong from "../WentWrong/WengWrong";

class Courses extends Component {


    constructor() {
        super();

        this.state={
            myJsonData:[],
            loading:true,
            error:false
        }
    }



    componentDidMount() {

        RestClient.GetRequest(AppUrl.CourseHomeSelect).then((result)=>{

            if(result == null){

                this.setState({error: true});

            }
            else{

                this.setState({myJsonData: result, loading:false});
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
            else{

                const myList = this.state.myJsonData;
                const myView = myList.map((item, i) => {

                    return (

                        <Col lg={6} md={12} sm={12} className="p-2">
                            <Row className="p-3">
                                <Col className="p-2" lg={6} md={6} sm={12}>
                                    <img className="courseImg" src={myList[i].small_img} alt="Logo"/>
                                </Col>
                                <Col className="p-2" lg={6} md={6} sm={12}>
                                    <h5 className="text-justify courseTitle">{myList[i].short_title}</h5>
                                    <p className="text-justify courseDes">{myList[i].short_description}</p>
                                    <Link to={"/CourseDetails/" + myList[i].id}
                                          className="float-left courseDetails">Details</Link>
                                </Col>
                            </Row>
                        </Col>

                    )

                })


                return (
                    <Fragment>

                        <Container className="text-center">
                            <h1 className="serviceMainTitle">OUR COURSES</h1>
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

export default Courses;
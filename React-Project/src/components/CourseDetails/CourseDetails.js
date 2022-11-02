import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import HTMLReactParser from "html-react-parser";
import loading from "../Loading/Loading";
import Loading from "../Loading/Loading";
import WengWrong from "../WentWrong/WengWrong";
import RestClient from "../../RestApiServices/RestClient";
import AppUrl from "../../RestApiServices/AppUrl";


class CourseDetails extends Component {


      constructor(props) {
         super();
         this.state={
             CourseID:props.id,
             ShortTitle: "",
             ShortDescription: "",
             LongTitle: "",
             LongDescription: "",
             TotalLecture: "",
             TotalStudent: "",
             SkillAll: "",
             VideoURL: "",
             CourseLink: "",
             loading:true,
             error:false
         }
      }


      componentDidMount() {

          let URL = AppUrl.CourseDetailsSelect;
          let jsonObject = {id:this.state.CourseID};
          let jsonString = JSON.stringify(jsonObject);

            RestClient.PostRequest(URL,jsonString).then((result)=>{

               if(result==null) {

                   this.setState({error:true})
               }
               else{

                   let myJsonData = result;

                   let short_title = myJsonData[0].short_title;
                   let short_description = myJsonData[0].short_description;
                   let long_title = myJsonData[0].long_title;
                   let long_description = myJsonData[0].long_description;
                   let total_lecture = myJsonData[0].total_lecture;
                   let total_student = myJsonData[0].total_student;
                   let skill_all = myJsonData[0].skill_all;
                   let video_url = myJsonData[0].video_url;
                   let course_link = myJsonData[0].course_link;

                   this.setState({

                       ShortTitle: short_title,
                       ShortDescription: short_description,
                       LongTitle: long_title,
                       LongDescription: long_description,
                       TotalLecture: total_lecture,
                       TotalStudent: total_student,
                       SkillAll: skill_all,
                       VideoURL: video_url,
                       CourseLink: course_link,
                       loading: false
                   })

               }

            }).catch((error)=>{

                this.setState({error:true})
            })
      }




    render() {



        /*ErrorCondition Started*/
        if(this.state.error == false) {

            if(this.state.loading == true){

                return (
                    <Fragment>
                        <Loading></Loading>
                    </Fragment>
                )

            }else {

                return (

                    <Fragment>

                        <Container fluid={true} className="topFixedPage p-0 mb-4">

                            <div className="topPageOverlay">

                                <Container className="topPageContentCourse p-4">

                                    <Row>

                                        <Col lg={6} md={6} sm={12} className="mb-3">
                                            <h3 className="courseFullTitle">{this.state.LongTitle}</h3>
                                            <h5 className="courseSubTitle">Total Lecture-{this.state.TotalLecture}</h5>
                                            <h5 className="courseSubTitle">Total Student-{this.state.TotalStudent}</h5>
                                        </Col>


                                        <Col lg={6} md={6} sm={12}>
                                            <p className="courseDescription">
                                                {this.state.LongDescription}
                                            </p>
                                        </Col>

                                    </Row>

                                </Container>
                            </div>
                        </Container>


                        <Container className="mt-5">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <h1 className="serviceName">Skill You Get</h1>

                                    {HTMLReactParser(this.state.SkillAll)}

                                    <Button target="_blank" href={"//" + this.state.CourseLink} variant="primary">Buy
                                        Now</Button>

                                </Col>


                                <Col lg={6} md={6} sm={12} className="courseDetailsVideo justify-content-center">

                                    <video width="100%"  controls>
                                        <source src={this.state.VideoURL} type="video/mp4"/>
                                    </video>

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

export default CourseDetails;
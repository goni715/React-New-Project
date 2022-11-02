import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import projectDetailsPic from '../../asset/image/projectDetails.jpeg';
import RestClient from "../../RestApiServices/RestClient";
import AppUrl from "../../RestApiServices/AppUrl";
import HTMLReactParser from "html-react-parser";
import Loading from "../Loading/Loading";
import WengWrong from "../WentWrong/WengWrong";


class ProjectDetails extends Component {


    constructor(props) {
        super();
        this.state={
            projectID:props.id,
            Project_Name:"",
            Project_Details_Img:"",
            Short_Description:"",
            Project_Features:"",
            Live_Preview_URL:"",
            loading:true,
            error:false

        }
    }



    componentDidMount() {

        let URL = AppUrl.ProjectDetailsSelect;
        let jsonObject = {id:this.state.projectID};
        let jsonString = JSON.stringify(jsonObject);

       RestClient.PostRequest(URL,jsonString).then((result)=>{

           if(result==null) {

               this.setState({error:true});
           }
           else{

               let myJsonData = result;
               let project_name = myJsonData[0].project_name;
               let project_details_img = myJsonData[0].project_details_img;
               let short_description = myJsonData[0].short_description;
               let project_features = myJsonData[0].project_features;
               let live_preview_url = myJsonData[0].live_preview_url;

               this.setState({
                   Project_Name: project_name,
                   Project_Details_Img: project_details_img,
                   Short_Description: short_description,
                   Project_Features: project_features,
                   Live_Preview_URL: live_preview_url,
                   loading: false
               });

           }

       }).catch((error)=>{

           this.setState({error:true});
       })

    }


    render() {


        /*ErrorCondition Started*/
        if(this.state.error == false){

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

                        <Container className="mt-5">
                            <Row>

                                <Col lg={6} md={6} sm={12}>

                                    <img className="projectDetailsImg" src={this.state.Project_Details_Img}/>

                                </Col>


                                <Col lg={6} md={6} sm={12}>
                                    <h1>{this.state.project_id}</h1>
                                    <h2 className="serviceName">{this.state.Project_Name}</h2>
                                    <p className="serviceDescription">{this.state.Short_Description}</p>

                                    {HTMLReactParser(this.state.Project_Features)}

                                    <Button variant="primary" target="_blank" href={"//" + this.state.Live_Preview_URL}>Live
                                        Preview</Button>
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

export default ProjectDetails;
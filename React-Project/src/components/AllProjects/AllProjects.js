import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";

import projectPic1 from '../../asset/image/project1.jpg';
import projectPic2 from '../../asset/image/project2.webp';
import projectPic3 from '../../asset/image/project3.jpg';
import projectPic4 from '../../asset/image/project4.jpg';
import projectPic5 from '../../asset/image/project5.jpg';
import projectPic6 from '../../asset/image/project6.jpg';
import {Link} from "react-router-dom";
import RestClient from "../../RestApiServices/RestClient";
import AppUrl from "../../RestApiServices/AppUrl";
import Loading from "../Loading/Loading";
import WengWrong from "../WentWrong/WengWrong";



class AllProjects extends Component {

    constructor() {
        super();

        this.state={
            myJsonData:[],
            loading:true,
            error:false
        }
    }


    componentDidMount() {

         RestClient.GetRequest(AppUrl.ProjectAllSelect).then((result)=>{

             if(result==null){
                 this.setState({error:true});
             }
             else{
                 this.setState({myJsonData:result, loading:false});
             }

         }).catch((error)=>{

             this.setState({error:true});
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

            } else {

                const myList = this.state.myJsonData;
                const myView = myList.map((item, i) => {

                    return (

                        <Col sm={12} lg={4} md={6} className="p-2">

                            <Card className="projectCard">
                                <Card.Img className="projectImg" variant="top" src={myList[i].project_img}/>
                                <Card.Body>
                                    <Card.Title className="projectCardTitle">{myList[i].project_name}</Card.Title>
                                    <Card.Text className="projectCardDes">
                                        {myList[i].short_description}
                                    </Card.Text>
                                    <Button variant="primary"><Link className="link-style"
                                                                    to={"/ProjectDetails/" + myList[i].id + "/" + myList[i].project_name}> Details</Link></Button>
                                </Card.Body>
                            </Card>

                        </Col>

                    )


                })


                return (
                    <Fragment>
                        <Container className="text-center mt-5">
                            <Row>

                                {myView}

                            </Row>
                        </Container>
                    </Fragment>
                );
            }

        }
        else{
            return (
                <Fragment>
                    <WengWrong></WengWrong>
                </Fragment>
            )
        }
    }
}

export default AllProjects;
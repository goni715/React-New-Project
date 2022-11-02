import React, { Component, Fragment } from 'react';
//import "~slick-carousel/slick/slick.css";
//import "~slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Col, Row, Container} from 'react-bootstrap';
import reviewPic1 from '../../asset/image/review1.jpeg';
import reviewPic2 from '../../asset/image/review2.webp';
import reviewPic3 from '../../asset/image/review3.webp';
import RestClient from "../../RestApiServices/RestClient";
import AppUrl from "../../RestApiServices/AppUrl";
import Loading from "../Loading/Loading";
import WengWrong from "../WentWrong/WengWrong";
import AllCourses from "../AllCourses/AllCourses";


export default class ClientReview extends Component {


    constructor() {
        super();

        this.state={
            myJsonData:[],
            loading:true,
            error:false
        }
    }



 componentDidMount() {

      RestClient.GetRequest(AppUrl.ClientReviewSelect).then((result)=>{

          if(result==null){

              this.setState({error:true});
          }
          else {

              this.setState({myJsonData: result, loading: false})
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


                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={6} md={6} sm={12}>
                                    <img className="circleImg" src={myList[i].client_img} alt="Logo"/>
                                    <h1 className="serviceName">{myList[i].client_title}</h1>
                                    <p className="serviceDescription">{myList[i].client_description}</p>
                                </Col>
                            </Row>
                        </div>


                    )


                })


                var settings = {
                    autoplaySpeed: 3000,
                    autoplay: true,
                    dots: true,
                    infinite: true,
                    speed: 3000,
                    vertical: true,
                    verticalSwiping: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    responsive: [
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                infinite: true,
                                dots: true
                            }
                        },
                        {
                            breakpoint: 600,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                initialSlide: 1
                            }
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }
                    ]
                };


                return (
                    <Fragment>
                        <Container className="text-center">
                            <h1 className="serviceMainTitle">CLIENT SAYS</h1>
                            <Slider {...settings}>


                                {myView}

                            </Slider>
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


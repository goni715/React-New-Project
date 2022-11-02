import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip} from "recharts";
import RestClient from "../../RestApiServices/RestClient";
import AppUrl from "../../RestApiServices/AppUrl";
import HTMLReactParser from "html-react-parser";
import Loading from "../Loading/Loading";
import WengWrong from "../WentWrong/WengWrong";

class Analysis extends Component {


    constructor() {
        super();

        this.state={
            data:[ ],
            description:"",
            loading:true,
            error:false



        }

    }


    componentDidMount() {

        //ChartDataSelect
         RestClient.GetRequest(AppUrl.ChartDataSelect).then((result)=> {

             if(result == null){

                 this.setState({error: true});
             }
             else{

                this.setState({data: result, loading: false});
             }

        }).catch((error)=>{

             this.setState({error: true});
         })


        //SelectTechDescription
        RestClient.GetRequest(AppUrl.SelectTechDescription).then((result)=>{

            if(result == null){

                this.setState({error: true});
            }
            else{

                let myJsonData = result;
                let techDescription = myJsonData[0].tech_description;
                this.setState({description: techDescription});

            }

        }).catch((error)=>{

            this.setState({error: true});
        })


    }


    render() {


     /* const data = [
            {Technology:'Java', Projects:100},
            {Technology:'Kotlin', Projects:40},
            {Technology:'Sql', Projects:90},
            {Technology:'CSS', Projects:95},
            {Technology:'Jquery', Projects:60},
            {Technology:'React', Projects:90},
            {Technology:'PHP', Projects:100},
            {Technology:'Angular', Projects:65}
        ];*/



        if(this.state.error == false){

            if(this.state.loading == true){

                return (
                    <Fragment>
                        <Loading></Loading>
                    </Fragment>
                )

            }
            else{

                var blue = "rgba(0,115,230,0.8)";

                return (

                    <Fragment>


                        <Container className="text-center">
                            <h1 className="serviceMainTitle">Technology Used</h1>
                            <Row>
                                <Col style={{width: '100%', height: '300px'}} lg={6} md={12} sm={12} className="p-2">

                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart width={100} height={300} data={this.state.data}>
                                            <XAxis dataKey="Technology"/>
                                            <Tooltip/>
                                            <Bar dataKey="Projects" fill={blue}/>
                                        </BarChart>
                                    </ResponsiveContainer>


                                </Col>

                                <Col lg={6} md={12} sm={12}>

                                    {HTMLReactParser(this.state.description)}

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

export default Analysis;
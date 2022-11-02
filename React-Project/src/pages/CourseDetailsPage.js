import React, {Fragment, useEffect, useState} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import Footer from "../components/Footer/Footer";
import {useParams} from "react-router-dom";
import RestClient from "../RestApiServices/RestClient";
import AppUrl from "../RestApiServices/AppUrl";

const CourseDetailsPage = () => {

    const params = useParams();


    useEffect(()=>{

        window.scroll(0,0);

    },[])




    return (

        <Fragment>

            <TopNavigation title="CourseDetails"></TopNavigation>

            <CourseDetails id={params['courseID']}></CourseDetails>

            <Footer></Footer>
        </Fragment>

    );
};

export default CourseDetailsPage;
import React, {Fragment, useEffect} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import ProjectDetails from "../components/ProjectDetails/ProjectDetails";
import Footer from "../components/Footer/Footer";
import {useParams} from "react-router-dom";

const ProjectDetailsPage = () => {

  useEffect(()=>{
      window.scroll(0,0);
  },[])


    const params = useParams();


    return (

         <Fragment>
             <TopNavigation title="Project Details"></TopNavigation>
             <PageTop topPageTitle={params['projectName']}></PageTop>
             <ProjectDetails id={params['projectID']} ></ProjectDetails>
             <Footer></Footer>

         </Fragment>

    );
};

export default ProjectDetailsPage;
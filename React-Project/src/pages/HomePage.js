import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import TopBanner from "../components/TopBanner/TopBanner";
import Services from "../components/Services/Services";
import Summary from "../components/Summary/Summary";
import RecentProjects from "../components/RecentProjects/RecentProjects";
import Courses from "../components/Courses/Courses";
import Video from "../components/Video/Video";
import Footer from "../components/Footer/Footer";
import Analysis from "../components/Analysis/Analysis";
import ClientReview from "../components/ClientReview/ClientReview";



class HomePage extends Component {


    componentDidMount() {
        window.scroll(0,0);
    }


    render() {
        return (
            <Fragment>

                <TopNavigation title="Home"></TopNavigation>
                <TopBanner></TopBanner>
                <Services></Services>
                <Analysis></Analysis>
                <Summary></Summary>
                <RecentProjects></RecentProjects>
                <Courses></Courses>
                <Video></Video>
                <ClientReview></ClientReview>
                <Footer></Footer>


            </Fragment>
        );
    }
}

export default HomePage;
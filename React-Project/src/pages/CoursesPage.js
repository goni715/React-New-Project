import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import AllCourses from "../components/AllCourses/AllCourses";
import Footer from "../components/Footer/Footer";

class CoursesPage extends Component {

    componentDidMount() {
        window.scroll(0,0);
    }


    render() {
        return (

            <Fragment>

                <TopNavigation title="Courses"></TopNavigation>
                <PageTop topPageTitle="All Courses"></PageTop>
                <AllCourses></AllCourses>
                <Footer></Footer>


            </Fragment>

        );
    }
}

export default CoursesPage;
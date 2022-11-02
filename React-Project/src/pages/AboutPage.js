import React, {Component, Fragment} from 'react';
import PageTop from "../components/PageTop/PageTop";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import AboutDescription from "../components/AboutDescription/AboutDescription";
import Footer from "../components/Footer/Footer";
import Loading from "../components/Loading/Loading";
import WengWrong from "../components/WentWrong/WengWrong";

class AboutPage extends Component {

    componentDidMount() {
        window.scroll(0,0);
    }


    render() {
        return (
            <Fragment>

                 <TopNavigation title="About" ></TopNavigation>
                 <PageTop topPageTitle="About Me"></PageTop>
                <AboutDescription></AboutDescription>

                <Footer></Footer>


            </Fragment>
        );
    }
}

export default AboutPage;
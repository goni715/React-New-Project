import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import AllServices from "../components/AllServices/AllServices";
import ContactSection from "../components/ContactSection/ContactSection";
import Footer from "../components/Footer/Footer";



class ServicePage extends Component {


    componentDidMount() {
        window.scroll(0,0);
    }



    render() {
        return (
            <Fragment>

                <TopNavigation title="Service"></TopNavigation>
                <PageTop topPageTitle="My Services"></PageTop>
                <AllServices></AllServices>
                <ContactSection></ContactSection>
                <Footer></Footer>


            </Fragment>
        );
    }
}

export default ServicePage;
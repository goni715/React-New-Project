import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import PrivacyDescription from "../components/PrivacyDescription/PrivacyDescription";
import Footer from "../components/Footer/Footer";

class PrivacyPage extends Component {


    componentDidMount() {
        window.scroll(0,0);
    }


    render() {
        return (

              <Fragment>

                   <TopNavigation title="Privacy"></TopNavigation>
                  <PageTop topPageTitle="Privacy Policy"></PageTop>
                  <PrivacyDescription></PrivacyDescription>
                  <Footer></Footer>

              </Fragment>
        );
    }
}

export default PrivacyPage;
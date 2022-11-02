import React, {Component, Fragment} from 'react';
import PageTop from "../components/PageTop/PageTop";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import RefundSection from "../components/RefundDescription/RefundSection";
import Footer from "../components/Footer/Footer";

class RefundPage extends Component {


    componentDidMount() {
        window.scroll(0,0);
    }


    render() {
        return (
            <Fragment>

                <TopNavigation title="Refund"></TopNavigation>
                <PageTop topPageTitle="Refund"></PageTop>
                <RefundSection></RefundSection>
                <Footer></Footer>

            </Fragment>
        );
    }
}

export default RefundPage;
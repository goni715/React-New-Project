import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import TermsDescription from "../components/TermsDescription/TermsDescription";
import Footer from "../components/Footer/Footer";

class TermsPage extends Component {


    componentDidMount() {
        window.scroll(0,0);
    }


    render() {
        return (

             <Fragment>

                 <TopNavigation title="Terms"></TopNavigation>
                 <PageTop topPageTitle="Terms & Condition"></PageTop>
                 <TermsDescription></TermsDescription>
                 <Footer></Footer>


             </Fragment>
        );
    }
}

export default TermsPage;
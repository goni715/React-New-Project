import React, {Component, Fragment} from 'react';
import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage";
import ServicePage from "../pages/ServicePage";
import CoursesPage from "../pages/CoursesPage";
import PortfolioPage from "../pages/PortfolioPage";
import ContactPage from "../pages/ContactPage";
import AboutPage from "../pages/AboutPage";
import ErrorPage from "../pages/ErrorPage";
import RefundPage from "../pages/RefundPage";
import TermsPage from "../pages/TermsPage";
import PrivacyPage from "../pages/PrivacyPage";
import ProjectDetailsPage from "../pages/ProjectDetailsPage";
import CourseDetailsPage from "../pages/CourseDetailsPage";

class AppRoute extends Component {
    render() {
        return (
            <Fragment>

                <HashRouter>
                    <Routes>
                        <Route exact path="/" element={<HomePage/>} ></Route>
                        <Route exact path="/Service" element={<ServicePage/>}></Route>
                        <Route exact path="/Courses" element={<CoursesPage/>}></Route>
                        <Route exact path="/portfolio" element={<PortfolioPage/>}></Route>
                        <Route exact path="/Contact" element={<ContactPage/>}></Route>
                        <Route exact path="/About" element={<AboutPage/>}></Route>
                        <Route exact path="/Refund" element={<RefundPage/>}></Route>
                        <Route exact path="/Terms" element={<TermsPage/>}></Route>
                        <Route exact path="/Privacy" element={<PrivacyPage/>}></Route>
                        <Route exact path="/ProjectDetails/:projectID/:projectName" element={<ProjectDetailsPage/>}></Route>
                        <Route exact path="/CourseDetails/:courseID" element={<CourseDetailsPage/>}></Route>
                        <Route exact path="*" element={<ErrorPage/>}></Route>
                    </Routes>
                </HashRouter>

            </Fragment>
        );
    }
}

export default AppRoute;
import React, {Component, Fragment, useRef} from 'react';
import {Container, Navbar, Nav, NavDropdown, Collapse} from "react-bootstrap";
import '../../asset/css/custom.css';
import '../../asset/css/bootstrap.min.css';
import whiteLogo from '../../asset/image/navLogo4.webp';
import scrollLogo from '../../asset/image/navScrollLogo.webp';
import {NavLink} from "react-router-dom";

import ReactDOM from 'react-dom';


class TopNavigation extends Component {


    constructor(){
        super();

        this.state={
            navBarTitle: "navTitle",
            navBarLogo: [whiteLogo],
            navVariant:"dark",
            navBarBackground: "navBackground",
            navBarItem:"navItem",
            back:"collapseNavbarBackground"

        }
    }



    onScroll=()=>{
         if(window.scrollY > 100){
             this.setState({navBarTitle:"navTitleScroll", navBarLogo:[scrollLogo], navBarBackground:"navBackgroundScroll", navBarItem:"navItemScroll", navVariant:"light", back:"collapseScroll"});
         }
         else if(window.scrollY < 100){

            this.setState({navBarTitle:"navTitle", navBarLogo:[whiteLogo], navBarBackground:"navBackground", navBarItem:"navItem", navVariant:"dark", back:"collapseNavbarBackground"});
         }
    }



  componentDidMount(){
      window.addEventListener('scroll',this.onScroll);
  }



    render() {


        return (
            <Fragment>

                <title>{this.props.title}</title>

                <Navbar variant={this.state.navVariant} className={this.state.navBarBackground} fixed="top" collapseOnSelect expand="lg">
                  
                    <Navbar.Brand> <NavLink className={this.state.navBarTitle} to="/"> <img className="img" src={this.state.navBarLogo}/> Osman Goni </NavLink></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                     </Nav>

                     <Nav >

                         <Nav.Link><NavLink className={this.state.navBarItem} style={({ isActive })=>{return {color:isActive ? '#00a8ee':'#ffffff'}}} to="/" end>HOME</NavLink>  </Nav.Link>
                        <Nav.Link> <NavLink className={this.state.navBarItem} style={({ isActive })=>{return {color:isActive ? '#00a8ee':'#ffffff'}}} to="/Service">SERVICES </NavLink></Nav.Link>
                        <Nav.Link> <NavLink className={this.state.navBarItem} style={({ isActive })=>{return {color:isActive ? '#00a8ee':'#ffffff'}}} to="/Courses">COURSES </NavLink> </Nav.Link>
                        <Nav.Link> <NavLink className={this.state.navBarItem} style={({ isActive })=>{return {color:isActive ? '#00a8ee':'#ffffff'}}} to="/Portfolio">PORTFOLIO </NavLink> </Nav.Link>
                        <Nav.Link> <NavLink className={this.state.navBarItem} style={({ isActive })=>{return {color:isActive ? '#00a8ee':'#ffffff'}}} to="/Contact">CONTACT </NavLink> </Nav.Link>
                        <Nav.Link> <NavLink className={this.state.navBarItem} style={({ isActive })=>{return {color:isActive? '#00a8ee':'#ffffff'}}} to="/About">ABOUT </NavLink> </Nav.Link>
                    
                   
                     </Nav>
                </Navbar.Collapse>
              
               </Navbar>


             </Fragment>
        );
    }
}

export default TopNavigation;
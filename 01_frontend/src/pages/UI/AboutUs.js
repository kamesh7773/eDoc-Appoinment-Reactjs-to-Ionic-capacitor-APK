import React, { Component } from "react";
import "../../CSS/Navbars/CommanNavbar.css";
import "../../CSS/AboutUs.css";
import img from "../../Images/fifthteen_years.png";
import CommanNavbar from "./CommanNavbar"

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
        <CommanNavbar/>
        <header class="about">
          <div class="content">
            <img src={img} alt=""></img>
            <div class="text">
              <h1>About Us</h1>
              <br />
              <h3>Why Choose eDoc Healthcare</h3>
              <br />
              <br />
              <p>
                Established by Dr Harsh Kalwani and Dr Kamesh Singh Sisodiya in
                2005,eDoc Healthcares has robust presence across the healthcare
                ecosystem. From routine well and & preventive health care to
                innovate life saving treatments and diagnostic services. eDoc
                haa saved over 10 million lives from over whole India, offering
                the best clinical outcomes{" "}
              </p>
            </div>
          </div>
        </header>
      </>
    );
  }
}
export default Navbar;

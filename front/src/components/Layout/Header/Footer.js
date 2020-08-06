import React, { Fragment } from "react";
import { connect } from "react-redux";

import "./Layout.css";

const Footer = ({auth:{admin}}) => {
  return (
    <Fragment>
    {admin ? '': (<div
      className="container-fluid"
      style={{ marginBottom: 0, background: "#1f2122" }}
      >
      <div className="row text-center footer-items">
        <div
          className="about col-4"
          >
          <p>
          מה כותבים בעיתונות&ensp; עלינו &ensp; צור קשר
          </p>
        </div>
        <div
          className="copy-rights col-4"
          >
          <p>
          חברת עורכי דין בע״מ 2019 &copy;
          </p>
        </div>
        <div
          className="logo col-4"
          >
          <p>
          LAW<b>MARKET</b>
          </p>
        </div>
      </div>
    </div>) }
    </Fragment>
    
    );
  };


const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Footer);

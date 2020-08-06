import React, {Fragment} from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";


import "./PageNotFound.css";

const PageNotFound = ({ auth: { user, lawyer, admin } }) => {
  const content = (
      <div className="container-fluid" style={{backgroundColor: '#007aff', height: '100vh'}}>

    <div className="page-not-found">
      <h1 className="page-not-found_h1">404</h1>
      <p>אופס! משהו לא בסדר.</p>
      <Link className="button" to="/">
        <i className="icon-home"></i> חזור לדף הבית
      </Link>
      </div>
      </div>
      
  );
  return ReactDOM.createPortal(
    content,
    document.getElementById("page404-hook")
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PageNotFound);

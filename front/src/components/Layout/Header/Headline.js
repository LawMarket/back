import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../../actions/auth";

import './Layout.css'

const Headline = ({ auth: { isAuthenticated, loading, admin, lawyer }, logout }) => {
 

  const authLinks = (
    <ul className="navbar-link" style={{ display: "contents" }}>
      <li className="nav-link">
        <Link className="nav-link" to="lawyerlist">
          עורכי דין
        </Link>
      </li>
      <li className="nav-link">
        <Link to="/dashboard">
          <i className="fas fa-user"></i>{" "}
          <span className="hide-sm">איזור אישי</span>
        </Link>
      </li>
      <li className="nav-link">
        <a onClick={logout} href="#!">
          <i className="fas fa-sign-out-alt"></i>{" "}
          <span className="hide-sm">התנתק</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul className="navbar-nav">
        <li className="nav-link">
        <Link className="nav-link" to="lawyerlist">
          עורכי דין
        </Link>
      </li>
      <li className="nav-link">
        <Link to="/register" className="nav-link" href="#">
          הרשמה
        </Link>
      </li>
      <li className="nav-link">
        <Link to="/login" className="nav-link" href="#">
          התחבר
        </Link>
      </li>
    </ul>
  );

  const adminLinks = (
    <ul className="navbar-nav" style={{ display: "contents" }}>
      <li className="nav-link">
        <Link  to="/lawyerstable">
          עורכי דין
        </Link>
      </li>
      <li className="nav-link">
        <Link to="/usertable">
          <i className="fas fa-user"></i>{" "}
          <span className="hide-sm">משתמשים</span>
        </Link>
      </li>
      <li className="nav-link">
        <Link to="/lawyerregiester">
          <i className="fas fa-user"></i>{" "}
          <span className="hide-sm">הוסף עו״ד</span>
        </Link>
      </li>
      <li className="nav-link">
        <a onClick={logout} href="#!">
          <i className="fas fa-sign-out-alt"></i>{" "}
          <span className="hide-sm">התנתק</span>
        </a>
      </li>
    </ul>
  );

  const lawyerLinks = (
    <ul className="navbar-nav" style={{ display: "contents" }}>
      <li className="nav-link">
        <Link to="/">
          <span className="hide-sm">בקשות עבודה</span>
        </Link>
      </li>
      <li className="nav-link">
        <Link to="/userslist">
          <i className="fas fa-user"></i>{" "}
          <span className="hide-sm">משתמשים</span>
        </Link>
      </li>
      <li className="nav-link">
        <Link to="/lawyerdashboard">
          <span className="hide-sm">איזור אישי</span>
        </Link>
      </li>
      <li className="nav-link">
        <a onClick={logout} href="#!">
          <i className="fas fa-sign-out-alt"></i>{" "}
          <span className="hide-sm">התנתק</span>
        </a>
      </li>
    </ul>
  );



  return (
    <div className="home-page">
      <nav
        className="navbar navbar-expand-sm "
        dir="ltr"
        style={{ alignItems: "baseline" }}
      >
        {!admin ? (
          <Link to="/" className="navbar-brand">
            <p style={{color:'#fff'}}>
              LAW<b>MARKET</b>
            </p>
          </Link>
        ) : (
          <p>
            {" "}
            <b>ADMIN PANEL L-M</b>
          </p>
        )}
        <button
        style={{backgroundColor:'#fff'}}
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse text-right"
          id="collapsibleNavbar"
          style={{ justifyContent: "flex-end" }}
        >
          {admin ? adminLinks : 
          lawyer ? lawyerLinks :
          isAuthenticated ? authLinks : guestLinks }
          
        </div>
      </nav>
      {admin || lawyer ? (<div></div>) : (
        <div className="jumbotron text-center" style={{ marginBottom: 0, backgroundColor: 'transparent'}}>
          <h1 style={{color:'#fff'}}>עורכי הדין הטובים בתחום במקום אחד</h1>
          <div className="input-group" style={{ flexDirection: "row-reverse" }}>
            <input
              type="text"
              className="form-control"
              placeholder="חפש את התחום שאתה צריך"
            />
            <div className="input-group-append">
              <button className="btn btn-secondary" type="button" style={{backgroundColor:'#ffff', borderColor:'#ffff'}}>
                <i className="fa fa-search" style={{color:'black'}}></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Headline);

{
  /*
    <div
  className="input-group col-md-8"
  style={{ flexDirection: "row-reverse" }}
  >
  <input
    className="form-control py-2"
    type="search"
    placeholder="search"
    id="example-search-input"
  />
  <span className="input-group-append">
    <button className="btn btn-outline-secondary" type="button">
      <i className="fa fa-search"></i>
    </button>
  </span>
  </div>
  */
}

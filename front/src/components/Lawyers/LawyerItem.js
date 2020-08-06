import React, { useEffect, Fragment } from "react";
import { Link, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCurrentProfileby } from '../../actions/profile'

import Spinner from '../Layout/Header/Spinner';
import image from "./userpic.jpeg";
import Rating from "../general/Rating";
import LawyerSkils from "./LawyerSkils";
import pic from "../Cards/product.jpg";




const LawyerItem = ({ match, profile: { profile , loading } , getCurrentProfileby, auth :{admin}}) => {
  useEffect(() => {
    getCurrentProfileby(match.params.id);
  }, [getCurrentProfileby, match.params.id]);
  /* const {
    lawyerKnow,
    lawyerPrice,
    layerPic,
    skills,
    location,
    expirence,
    answerTime,
    workReady,
    bio,
  } = profile; */
  
  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner />
      ) : (
    <div className="container mb-5 mt-5">
      <div className="row">
        <div className="col-md-4">
          <div className="card profile-card-2">
            <div className="card-img-block">
              <img className="img-fluid" src={pic} alt="Card image cap" />
            </div>

            <div className="card-body">
              <img src={image} alt="profile-image" className="profile" />
              <div className="lawyer-details-card">
                <ul className="lawyer-details_ul">
                  <li className="lawyer-name">
                    <a href="#" style={{ color: "white" }}>
                      {`${profile.lawyer.firstName} ${profile.lawyer.lastName}`}
                </a>
                  </li>
                  <li className="lawyer-know"> עו״ד ל {profile.lawyerKnow} </li>
                  <Rating />
                </ul>
              </div>
            </div>

            <p
              style={{
                textAlign: "right",
                fontSize: "x-small",
                padding: "8px 25px 0px 0px",
              }}
            >
              {profile.bio}
            </p>
            <hr />
            <ul className="">
              {profile.skills.slice(0, 4).map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
            <hr />
            <div>
              <div
                className="d-flex justify-content-between align-items-center"
                style={{ fontSize: "small" }}
              >
                <div className=" ">
                  <i
                    className="fas fa-map-marker-alt"
                    style={{ border: "0px", color: "#08b9e3" }}
                  ></i>
                  מאיפה
                </div>
                <div className=" " style={{ marginLeft: ".8rem" }}>
                  {profile.location}
                </div>
              </div>
              <div
                className="d-flex justify-content-between align-items-center"
                style={{ fontSize: "small" }}
              >
                <div className="">
                  <i
                    class="fas fa-clock"
                    style={{ border: "0px", color: "#08b9e3" }}
                  ></i>
                  ניסיון בתחום
                </div>
                <div className="" style={{ marginLeft: ".8rem" }}>
                  {profile.expirence} שנים
                </div>
              </div>
              <div
                className="d-flex justify-content-between align-items-center"
                style={{ fontSize: "small" }}
              >
                <div className=" ">
                  <i
                    className="fas fa-comment-dots"
                    style={{ border: "0px", color: "#08b9e3" }}
                  ></i>
                  זמן תגובה ממוצע
                </div>
                <div className=" " style={{ marginLeft: ".8rem" }}>
                  {profile.reactTime}
                </div>
              </div>
              <div
                className="d-flex justify-content-between align-items-center"
                style={{ fontSize: "small" }}
              >
                <div className=" ">
                  <i
                    className="fas fa-calendar-check"
                    style={{ border: "0px", color: "#08b9e3" }}
                  ></i>
                  עבודה מכונה תוך זמן
                </div>
                <div className=" " style={{ marginLeft: ".8rem" }}>
                  {profile.workReady}
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between p-3">
              <button
                type="button"
                className="btn btn-primary"
                style={{
                  borderColor: "rgb(8, 185, 227)",
                  backgroundColor: "rgb(8, 185, 227)",
                }}
              >
                צור קשר
              </button>
              <button
                type="button"
                className="btn btn-outline-primary offer-btn"
                style={{
                  color: "rgb(8, 185, 227)",
                  borderColor: "rgb(8, 185, 227)",
                }}
              >
                לקבלת הצעה
              </button>
            </div>
          </div>
        </div>
        <LawyerSkils lawyer={profile.lawyer} admin={admin} lawyerKnow={profile.lawyerKnow}/>
      </div>
    </div>
       )}
       </Fragment>
  );
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
  });

export default connect(mapStateToProps, { getCurrentProfileby })(withRouter(LawyerItem));

import React, { useEffect, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Spinner from "../../Layout/Header/Spinner";
import { getCurrentProfile, deleteAccount } from "../../../actions/profile";
import './profile.css';

const LawyerDashboard = ({
  getCurrentProfile,
  deleteAccount,
  profile: { profile, loading },
  auth: { lawyer, isAuthenticated, user },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);
  if (!isAuthenticated || user) {
    return <Redirect to="/" />
  }

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <div className="conrainer mt-5" style={{height:'100vh'}}>
      <h1 className="large text-primary text-center mb-5">איזור אישי</h1>
      <p className="lead text-center mb-5">
        שלום {lawyer && lawyer.firstName + " " + lawyer.lastName} <i className="fas fa-user" />
      </p>
      {profile !== null ? (
        <div className="d-flex flex-column justify-content-center align-items-center">
          <Link to="/lawyereditprofile" className="btn btn-light">
            <i className="fas fa-user-circle text-primary" /> ערוך פרופיל
          </Link>
          <div className="my-2">
            <button className="btn btn-danger" onClick={() => deleteAccount()}>
              <i className="fas fa-user-minus" /> מחק את החשבון שלי
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center row justify-content-center ">
            <div className="">
          <p>עדיין לא הגדרת פרופיל, אנא הוסף מידע</p>
          <Link to="/lawyercreateprofile" className="btn btn-primary my-1 text-center mb-4">
            צור פרופיל
          </Link>
            </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  LawyerDashboard
);

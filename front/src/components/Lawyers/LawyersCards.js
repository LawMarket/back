import React, { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getAllLawyers } from "../../actions/admin";
import Spinner from "../Layout/Header/Spinner";
import LawyerCard from "./LawyerCard";

import "./Lawyers.css";

const LawyersCards = ({ getAllLawyers, profile: { profiles, loading } }) => {
  useEffect(() => {
    getAllLawyers();
  }, [getAllLawyers]);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div className="container-fluid layers-card-container">
            <h3 className="text-center lawyers-title">עורכי הדין שלנו</h3>
            <div className="cards-container row justify-content-center m-0">
              {profiles.length > 0 ? (
                profiles.map((profile) => (
                  <LawyerCard key={profile._id} profile={profile} />
                ))
              ) : (
                <h4>לא נמצאו עורכי דין </h4>
              )}
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getAllLawyers })(LawyersCards);

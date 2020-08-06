import React, { useEffect, Fragment } from "react";
import Lawyer from "./Lawyer";
import { connect } from "react-redux";
import { getAllLawyers } from "../../actions/admin";
import Spinner from "../Layout/Header/Spinner";
import "./Lawyers.css";

const LawyersList = ({ getAllLawyers, profile: { profiles, loading } }) => {
  useEffect(() => {
    getAllLawyers();
  }, [getAllLawyers]);
  console.log(profiles, "profiles");
  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <div className="container  mb-5 mt-5">
          <h1 className="mb-3 text-center">עורכי הדין שלנו</h1>
          <div className="lw-wrapper row">
            {profiles.length > 0 ? (
              profiles.map((profile) => (
                <Lawyer key={profile._id} profile={profile} />
              ))
            ) : (
              <h4> לא נמצאו עורכי דין</h4>
            )}
          </div>
        </div>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getAllLawyers })(LawyersList);

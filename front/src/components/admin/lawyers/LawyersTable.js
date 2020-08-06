import React, { useEffect, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { getAllLawyers } from "../../../actions/admin";
import Spinner from '../../Layout/Header/Spinner';
import LawyerRow from './LawyerRow';

const LawyersTable = ({getAllLawyers, profile: { profiles, loading } ,auth:{isAuthenticated, lawyer, user}}) => {
    useEffect(() => {getAllLawyers()}, [getAllLawyers]);
    if (!isAuthenticated || lawyer || user) {
      return <Redirect to='/'/>
    }
    return (
        <Fragment>
        {loading ? (
          <Spinner />
        ) : (
          <div className="container-xl">
            <div className="table-responsive">
              <div className="table-wrapper">
                <table className="table table-striped table-hover">
                  <thead>
                    <tr className="text-right">
                      <th>#</th>
                      <th>שם</th>
                      <th>עו״ד לענייני</th>
                      <th>תאריך הצטרפות</th>
                      <th>כתובת דוא״ל</th>
                      <th>מספר טלפון</th>
                      <th>עסקאות</th>
                      <th>מאיפה</th>
                      <th>מחק</th>
                      <th>ערוך</th>
                    </tr>
                  </thead>
                  <tbody>
                    {profiles.length > 0 ? (
                      profiles.map((profile ) => (
                        <LawyerRow key={profile._id} profile={profile} />
                    ))
                    ) : []}
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </Fragment>
    )
}


const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth,
});

export default connect(mapStateToProps, { getAllLawyers })(LawyersTable);
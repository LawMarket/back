import React, { useEffect, Fragment, useState } from "react";
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { getAllUsers } from "../../../actions/admin";
import Row from "./Row";
import Spinner from "../../Layout/Header/Spinner";

import "./User.css";

const UserTable = ({ getAllUsers, usersList: { users, loading }, auth:{ isAuthenticated, user, lawyer } }) => {
    useEffect(() => {
        getAllUsers();
    }, [getAllUsers]);
   
    if (!isAuthenticated || user || lawyer) {
      return <Redirect to="/" />
    }

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <div class="container-xl">
          <div class="table-responsive">
            <div class="table-wrapper">
              <table class="table table-striped table-hover">
                <thead>
                  <tr className="text-right">
                    <th>#</th>
                    <th>שם</th>
                    <th>תאריך הצטרפות</th>
                    <th>כתובת דוא״ל</th>
                    <th>מספר טלפון</th>
                    <th>עסקאות</th>
                    <th>מחק</th>
                  </tr>
                </thead>
                <tbody>
                  {users.length > 0 ? (
                    users.map((user) =>{
                        return <Row key={user._id} user={user} usersNum={users.length}/>
                    }
                    )
                  ) : (
                    <h4>לא נמצאו משתמשים..</h4>
                  )}
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  usersList: state.admin,
  auth: state.auth,
});

export default connect(mapStateToProps, { getAllUsers })(UserTable);


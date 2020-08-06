import React from 'react';
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const Dashboard = ({  isAuthenticated, loading }) => {

    if (!isAuthenticated) {
        return <Redirect to="/" />
    }
    return (
        <div>
            Dashboard
        </div>
    )
}


const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});
  
export default connect(mapStateToProps)(Dashboard);

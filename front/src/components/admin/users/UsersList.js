import React, { Fragment, useEffect} from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllUsers } from '../../../actions/admin';

import Spinner from '../../Layout/Header/Spinner'
import UserItem from './UserItem';


 const UsersList = ({ getAllUsers, usersList: { users, loading }, auth :{isAuthenticated, user}
 }) => {
    useEffect(() => {getAllUsers()}, [getAllUsers])

    if (!isAuthenticated || user) {
        return <Redirect to="/" />
      }
    return (
        <div style={{minHeight:'100vh'}}>
         { loading ? <Spinner /> : <Fragment>
            <h1 className="mb-5 text-center">משתמשים</h1>
           
            <div className="lw-wrapper row">
                {users.length > 0 ? (
                    users.map(user => (
                    <UserItem key={user._id} user={user} />
                ))
                 ) : <h4>לא נמצאו עובדים..</h4>}
            </div>
            </Fragment>}  
    </div>
    )
}


const mapStateToProps = state => ({
    usersList: state.admin,
    auth: state.auth
});



export default connect(mapStateToProps, { getAllUsers })(UsersList);
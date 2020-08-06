import React from "react";
import { Link, Redirect } from "react-router-dom";


const UserItem = ({
  user: { _id, firstName, lastName, email, phoneNumber},
}) => {


  
  return (
    <div className="lw-card card1">
      <div className="card-head">
        <div className="lw-image"></div>
      </div>
      <div className="lw-about">
        <h1>{`${firstName}  ${lastName}`}</h1>
  <p>{email}</p>
  <p>{phoneNumber}</p>
        <Link to={`/lawyeritem/${_id}`}>
          <button
            type="button"
            className="btn btn-primary"
            style={{
              borderColor: "rgb(8, 185, 227)",
              backgroundColor: "rgb(8, 185, 227)",
            }}
          >
            לעוד פרטים
          </button>
        </Link>
      </div>
    </div>

);
};



export default UserItem;
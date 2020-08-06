import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { deleteLawyerAccount } from "../../../actions/admin";
import Moment from 'moment';

import img from "../../Lawyers/userpic.jpeg";
import "../users/User.css";

const LawyerRow = ({
    profile: {
        lawyer: { _id, firstName, lastName, date, email, phoneNumber },
        lawyerKnow,
        location,
    }, deleteLawyerAccount
}) => {
  let counter = 0;
  return (
    <tr className="text-right">
      <td>{email && counter+1}</td>
      <td>
        <Link to={`/lawyeritem/${_id}`}>
          <img
            src={img}
            className="avatar"
            alt="Avatar"
            width="35px"
            height="35px"
          />{" "}
          <p>{`${firstName} ${lastName}`}</p>
        </Link>
      </td>
      <td>{lawyerKnow}</td>
      <td>{Moment(date).subtract(10, 'days').calendar()}</td>
      <td>{email}</td>
      <td>{phoneNumber}</td>
      <td>{location}</td>
      <td>
        <span className="status text-success">&bull;</span> Active
      </td>
      <td>
        <a className="delete" title="Delete" style={{cursor:"pointer"}} onClick={() => deleteLawyerAccount(_id)}>
          <i className="fas fa-user-minus" />{" "}
        </a>
      </td>
      <td>
      <Link to={`/admineditlawyer/${_id}`} className="btn btn-light" style={{cursor:"pointer", color:'green'}}>
      <i className="far fa-edit"></i>{" "}
          </Link>
      </td>
    </tr>
  );
};

export default connect(null, { deleteLawyerAccount })(LawyerRow);

/* 
  <td>1</td>
                    <td>
                      <a href="#">
                        <img
                          src={img}
                          class="avatar"
                          alt="Avatar"
                          width="35px"
                          height="35px"
                        />{" "}
                        Michael Holz
                      </a>
                    </td>
                    <td>04/10/2013</td>
                    <td>Admin</td>
                    <td>
                      <span class="status text-success">&bull;</span> Active
                    </td>
                    <td>
                      <a
                        href="#"
                        class="settings"
                        title="Settings"
                        data-toggle="tooltip"
                      >
                        <i class="material-icons">&#xE8B8;</i>
                      </a>
                      <a
                        href="#"
                        class="delete"
                        title="Delete"
                        data-toggle="tooltip"
                      >
                        <i class="material-icons">&#xE5C9;</i>
                      </a>
                    </td>
*/

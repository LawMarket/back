import React, { useState } from "react";
import { connect } from "react-redux";
import { deleteUserAccount } from "../../../actions/admin";
import Moment from 'moment';

import img from "../../Lawyers/userpic.jpeg";
import "./User.css";

const Row = ({
  user: { _id, firstName, lastName, email, phoneNumber, date }, deleteUserAccount,key
}) => {
  let counter = 0;
  
  return (
    <tr className="text-right" key={key}>
      <td>{email && counter+1}</td>
      <td>
        <a href="#">
          <img
            src={img}
            class="avatar"
            alt="Avatar"
            width="35px"
            height="35px"
          />{" "}
          {`${firstName} ${lastName}`}
        </a>
      </td>
      <td>{Moment(date).subtract(10, 'days').calendar()}</td>
      <td>{email}</td>
      <td>{phoneNumber}</td>
      <td>
        <span className="status text-success">&bull;</span> Active
      </td>
      <td>
        <a className="delete" title="Delete" style={{cursor:"pointer"}} onClick={() => deleteUserAccount(_id)}>
          <i className="fas fa-user-minus" />{" "}
        </a>
      </td>
    </tr>
  );
};

export default connect(null, { deleteUserAccount })(Row);

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

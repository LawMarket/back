import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "../../../actions/alert";
import { lawyerRegister } from "../../../actions/admin";

import { connect } from "react-redux";

const LawyerRegiester = ({
  setAlert,
  lawyerRegister,
  auth: { isAuthenticated, user, lawyer },
}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    lawyerPic: "",
    phoneNumber: "",
    password: "",
    password2: "",
  });

  const {
    firstName,
    lastName,
    email,
    password,
    password2,
    lawyerPic,
    phoneNumber,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("the password dosnt matched", "danger", 5000);
    } else {
      lawyerRegister(formData);
      setAlert("The Lawyer created successfully", "success", 5000);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        lawyerPic: "",
        phoneNumber: "",
        password: "",
        password2: "",
      });
    }
  };

  if (!isAuthenticated || user || lawyer) {
    return <Redirect to="/" />;
  }

  return (
    <div class="container">
      <form
        class="row justify-content-center mb-5 mt-5"
        onSubmit={(e) => onSubmit(e)}
      >
        <div class="col-12 col-md-8 col-lg-8 col-xl-6">
          <div class="row">
            <div class="col text-center">
              <h1>הוסף עו״ד למאגר</h1>
            </div>
          </div>
          <div class="row align-items-center mt-4">
            <div class="col">
              <input
                type="text"
                placeholder="שם פרטי"
                name="firstName"
                value={firstName}
                onChange={(e) => onChange(e)}
                className="form-control"
              />
            </div>
            <div class="col">
              <input
                type="text"
                placeholder="שם משפחה"
                name="lastName"
                value={lastName}
                onChange={(e) => onChange(e)}
                className="form-control"
              />
            </div>
          </div>
          <div class="row align-items-center mt-4">
            <div class="col">
              <input
                placeholder='כתובת הדוא"ל'
                name="email"
                value={email}
                onChange={(e) => onChange(e)}
                className="form-control"
                type="email"
                className="form-control"
              />
            </div>
          </div>
          <div class="row align-items-center mt-4">
            <div class="col">
              <input
                placeholder="מספר טלפון"
                name="phoneNumber"
                value={phoneNumber}
                onChange={(e) => onChange(e)}
                className="form-control"
                type="text"
                className="form-control"
              />
            </div>
          </div>
          <div class="row align-items-center mt-4">
            <div class="col">
              <input
                type="password"
                class="form-control"
                placeholder="Password"
                placeholder="הזן סיסמא"
                name="password"
                value={password}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div class="col">
              <input
                type="password"
                placeholder="חזור על הסיסמא"
                name="password2"
                value={password2}
                onChange={(e) => onChange(e)}
                class="form-control"
              />
            </div>
          </div>
          <div class="row justify-content-start mt-4">
            <div class="col" style={{ display: "flex", justifyContent: "center",}}>
              <button
                type="submit"
                class="btn btn-primary mt-4 d-block"
                style={{
                  backgroundColor: " #08b9e3",
                  borderColor: " #08b9e3"
                }}
              >
                שלח
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { setAlert, lawyerRegister })(
  LawyerRegiester
);

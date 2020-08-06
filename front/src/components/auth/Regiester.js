import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from '../../actions/alert'
import { register} from '../../actions/auth';

import { connect } from "react-redux";

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    password2: "",
  });

  const { firstName, lastName, email, password, password2, phoneNumber } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('the password dosnt matched', 'danger' , 5000);
    } else {
      register(formData);
    } 
    }

  if (isAuthenticated) {
    return <Redirect to='/dashboard'/>
  }
//col-12 col-md-8 col-lg-8 col-xl-6
  return (
    <div className="container">
      <form className="row justify-content-center mb-5 mt-4" onSubmit={e =>onSubmit(e)}>
        <div className="card p-4">
          <div className="row">
            <div className="col text-center">
              <h1>הרשמה</h1>
              <p className="text-h3">
                הצטרף למאגר עורכי הדין הגדול בארץ, עורכי דין מכל התחומים ובכל
                זמן
              </p>
            </div>
          </div>
          <div className="row align-items-center mt-4">
            <div className="col">
              <input
                type="text"
                placeholder="שם פרטי"
                name="firstName"
                value={firstName}
                onChange={(e) => onChange(e)}
                className="form-control"
              />
            </div>
            <div className="col">
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
          <div className="row align-items-center mt-4">
            <div className="col">
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
          <div className="row align-items-center mt-4">
            <div className="col">
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
          <div className="row align-items-center mt-4">
            <div className="col">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                placeholder="הזן סיסמא"
                name="password"
                value={password}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="col">
              <input
                type="password"
                placeholder="חזור על הסיסמא"
                name="password2"
                value={password2}
                onChange={(e) => onChange(e)}
                className="form-control"
              />
            </div>
          </div>
          <div className="row justify-content-start mt-4">
            <div className="col">
              <button
              type="submit"
              className="btn btn-primary mt-4 d-block"
                style={{ backgroundColor: " #08b9e3", borderColor: " #08b9e3" }}
              >
                הירשם
              </button>
              <p className="my-1">
              יש לך חשבון ? <Link to="/register">התחבר</Link>
            </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};


const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Register);

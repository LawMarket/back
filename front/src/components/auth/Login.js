import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../actions/auth";

const Login = ({ login, auth :{lawyer, isAuthenticated, admin, user } }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    userType: false,
  });

  const { email, password, userType } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password, userType);
  };
  console.log(lawyer)
  if (isAuthenticated) {
    if (admin) {
      return <Redirect to="/lawyerstable" />;
    }
    if (lawyer) {
      return <Redirect to="/lawyerdashboard" />;
    } else if(user){
      return <Redirect to="/lawyerlist" />;
    }
  }
  
  return (
    <Fragment>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5 mb-5 mt-4">
            <div className="card p-4">
              <h1 className="text-center card-title">התחבר</h1>
              <form className="form" onSubmit={(e) => onSubmit(e)}>
                <div className="col align-items-center mt-4">
                  <div className="col p-3">
                    <input
                      type="email"
                      placeholder="כתובת דוא״ל"
                      name="email"
                      value={email}
                      onChange={(e) => onChange(e)}
                      className="form-control"
                    />
                  </div>
                  <div className="col p-3">
                    <input
                      type="password"
                      placeholder="סיסמא"
                      name="password"
                      value={password}
                      onChange={(e) => onChange(e)}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-check text-right mr-4">
                  <label className="form-check-label pr-2"></label>
                  <input
                    type="checkbox"
                    name="userType"
                    onChange={(e) => onChange(e)}
                  />{" "}
                  אני עו״ד
                </div>

                <input
                  type="submit"
                  className="btn btn-primary mt-4 d-block mr-4"
                  value="התחבר"
                  style={{
                    backgroundColor: " #08b9e3",
                    borderColor: " #08b9e3",
                  }}
                />
              </form>
              <p className="my-1">
                עדיין אין לך חשבון? <Link to="/register">הירשם</Link>
              </p>

            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { login })(Login);

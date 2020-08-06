import React from 'react';
import axios from "axios";
import { setAlert } from "./alert";
import { Redirect } from 'react-router-dom'
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGIN_OUT,
  CLEAR_PROFILE,
  ADMIN_LOADED,
  LAWYER_LOADED
} from "./types";

import setAuthToken from "../utills/setAuthToken";


export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get("api/auth");
    if (res.data.isAdmin) {
      dispatch({
        type: ADMIN_LOADED,
        payload: res.data
      });
    }if(res.data.isLawyer){
      dispatch({
        type: LAWYER_LOADED,
        payload: res.data
      });
    }
    else if(!res.data.isLawyer || !res.data.isAdmin) {
      dispatch({
        type: USER_LOADED,
        payload: res.data
      });
    }
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

export const login = (email, password, userType) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ email, password, userType });

  try {
    const res = await axios.post("/api/auth/login", body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: LOGIN_FAIL
    });
  }
};

export const register = (formData) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify(formData);

  try {
    const res = await axios.post("/api/users", body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());

  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: REGISTER_FAIL
    });
  }
};

export const logout = () => dispatch =>{
  dispatch({type: CLEAR_PROFILE});
  dispatch({
    type: LOGIN_OUT
  });
  return <Redirect to="/"/>
};


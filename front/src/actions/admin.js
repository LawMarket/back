import axios from "axios";
import {
  GET_USERS,
  USERS_ERROR,
  UPDATE_PROFILE,
  ACCOUNT_DELETE,
  CLEAR_PROFILE,
  ADMIN_DELETE_LAWYER,
  GET_PROFILES,
  PROFILE_ERROR,
  LAWYERS_REGISTER_FAIL,
  LAWYERS_REGISTER_SUCCESS,
  DELETE_ERROR,
  ADMIN_DELETE_USER,
  GET_PROFILE
} from "./types";
import { setAlert } from "./alert";


export const updateLawyer = (
  formData,
  history,
  edit = false,
  _id
) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const res = await axios.post(`/api/admin/update/${_id}`, formData, config);

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });

    dispatch(setAlert(edit ? 'הפרופיל עודכן' : 'הפרופיל נוצר', 'success'));

    if (!edit) {
      history.push('/');
    }
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};



export const lawyerRegister = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify(formData);

  try {
    const res = await axios.post("/api/admin/create-lawyer", body, config);

    dispatch({
      type: LAWYERS_REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: LAWYERS_REGISTER_FAIL,
    });
  }
};

export const getAllUsers = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/admin/allUsers");
    dispatch({
      type: GET_USERS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: USERS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};


export const getAllLawyers = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/admin/allLawyers");
    dispatch({
      type: GET_PROFILES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};


//delete user
export const deleteUserAccount = (id) => async dispatch => {
  if (window.confirm('האם אתה בטוח שאתה רוצה למחוק את החשבון?')) {
    try {
      await axios.delete(`/api/admin/${id}`);

      dispatch({type: ADMIN_DELETE_USER, payload:id});

      dispatch(setAlert('החשבון נמחק בהצלחה','success'));

    } catch (err) {
      dispatch({
        type: DELETE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  }
  
};



export const deleteLawyerAccount = (id) => async dispatch => {
  if (window.confirm('האם אתה בטוח שאתה רוצה למחוק את החשבון?')) {
    try {
      await axios.delete(`/api/admin/lawyer/${id}`);

      dispatch({type: ADMIN_DELETE_LAWYER, payload:id});

      dispatch(setAlert('החשבון נמחק בהצלחה','success'));

    } catch (err) {
      dispatch({
        type: DELETE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  }
  
};
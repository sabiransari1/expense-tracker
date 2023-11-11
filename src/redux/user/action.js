import {
  GET_LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGIN_REQUEST,
  IS_AUTH,
  POST_LOGIN_SUCCESS,
} from '../actionTypes';

import axios from 'axios';
const url = `https://expense-tracker-json-server-sabiransari1.onrender.com/users`;

export const postUser = (user) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    let res = await axios.post(`${url}`, user);

    dispatch({ type: POST_LOGIN_SUCCESS });
  } catch (error) {
    dispatch({ type: LOGIN_ERROR });
  }
};

export const getUsers = async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    let res = await axios.get(`${url}`);

    dispatch({ type: GET_LOGIN_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: LOGIN_ERROR });
  }
};

export const isAuth = (currUser) => async (dispatch) => {
  try {
    dispatch({ type: IS_AUTH, payload: currUser });
  } catch (error) {}
};

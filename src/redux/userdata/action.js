import {
  DATA_ERROR,
  DATA_REQUEST,
  GET_DATA_SUCCESS,
  POST_DATA_SUCCESS,
} from '../actionTypes';

import axios from 'axios';
const url = `https://expense-tracker-json-server-sabiransari1.onrender.com/usersdata`;

export const addData = (data) => async (dispatch) => {
  try {
    dispatch({ type: DATA_REQUEST });

    let res = await axios.post(`${url}`, data);

    dispatch({ type: POST_DATA_SUCCESS });
  } catch (error) {
    dispatch({ type: DATA_ERROR });
  }
};

export const getData = async (dispatch) => {
  try {
    dispatch({ type: DATA_REQUEST });

    let res = await axios.get(`${url}`);

    dispatch({ type: GET_DATA_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: DATA_ERROR });
  }
};

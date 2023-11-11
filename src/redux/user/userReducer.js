import {
  GET_LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGIN_REQUEST,
  IS_AUTH,
  POST_LOGIN_SUCCESS,
} from '../actionTypes';

const initState = {
  isLoading: false,
  isError: false,
  isAuth: false,
  currUser: new Object(),
  users: new Array(),
};

export const userReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }

    case LOGIN_ERROR: {
      return { ...state, isLoading: false, isError: true };
    }

    case GET_LOGIN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        users: payload,
      };
    }

    case POST_LOGIN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    }

    case IS_AUTH: {
      return {
        ...state,
        isAuth: true,
        currUser: payload,
      };
    }

    default: {
      return state;
    }
  }
};

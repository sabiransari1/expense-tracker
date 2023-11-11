import {
  DATA_ERROR,
  DATA_REQUEST,
  GET_DATA_SUCCESS,
  POST_DATA_SUCCESS,
} from '../actionTypes';

const initState = {
  isLoading: false,
  isError: false,
  userData: new Array(),
};

export const userdataReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case DATA_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }

    case DATA_ERROR: {
      return { ...state, isLoading: false, isError: true };
    }

    case POST_DATA_SUCCESS: {
      return { ...state, isLoading: false, isError: false };
    }

    case GET_DATA_SUCCESS: {
      return { ...state, isLoading: false, isError: false, userData: payload };
    }

    default: {
      return state;
    }
  }
};

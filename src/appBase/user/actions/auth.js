import {
  REGISTER_SUCCESS,
  REGISTERG_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
  UPDATEPASSWORD,
} from "./types";

import AuthService from "../services/auth.service";

export const registerUser =
  (username, email, password, confirmpassword, avatar) => (dispatch) => {
    return AuthService.register(
      username,
      email,
      password,
      confirmpassword,
      avatar
    ).then(
      (response) => {
        dispatch({
          type: REGISTER_SUCCESS,
        });

        dispatch({
          type: SET_MESSAGE,
          payload: response.data.message,
        });

        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        dispatch({
          type: REGISTER_FAIL,
        });

        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });

        return Promise.reject();
      }
    );
  };

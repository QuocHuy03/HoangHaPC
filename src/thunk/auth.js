import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  LOAD_CURRENT_LOGIN_USER_FAILED,
  LOAD_CURRENT_LOGIN_USER_SUCCESS,
  LOGIN_REQUEST,
} from "../stores/authentication";
import { userService } from "../services/user.service";

export const login = createAsyncThunk(
  "auth/login",
  async (data, { dispatch }) => {
    dispatch({
      type: LOGIN_REQUEST,
      payload: {
        email: data.email,
        password: data.password,
      },
    });
    try {
      const response = await userService.login(data.email, data.password);
      if (response.status === true) {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: response.result,
        });
        await verifyToken(response.result.accessToken);
        const info = await userService.fetchUserByID();
        try {
          dispatch({
            type: LOAD_CURRENT_LOGIN_USER_SUCCESS,
            payload: info.result,
          });
          return {
            status: true,
            message: "Đăng Nhập Thành Công!",
          };
        } catch (userError) {
          dispatch({
            type: LOAD_CURRENT_LOGIN_USER_FAILED,
            payload: {
              status: false,
              message: userError.message,
            },
          });
        }
      } else {
        dispatch({
          type: LOGIN_FAILED,
          payload: response.message,
        });
        return {
          status: false,
          message: response.message,
        };
      }
    } catch (error) {
      dispatch({
        type: LOGIN_FAILED,
        payload: {
          status: false,
          message: error.message,
        },
      });
    }
  }
);

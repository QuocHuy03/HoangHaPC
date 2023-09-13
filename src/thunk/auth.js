import { createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk(
  "auth/login",
  async (data, { dispatch }) => {
    try {
      const response = await postLogin(data);
      if (response.status === true) {
        // const user = await verifyToken(response.accessToken);
        if (response.role === "ADMIN") {
          dispatch(loginSuccess(response));
          message.success(`${response.message}`);
          return response;
        } else {
          message.error("Không Đủ Quyền");
        }
      } else {
        dispatch(loginError(response));
        message.error(`${response.message}`);
        throw new Error(response.message);
      }
    } catch (error) {
      dispatch(loginError(error));
      throw new Error(error);
    }
  }
);

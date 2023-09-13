import { createSlice } from "@reduxjs/toolkit";
import { login } from "../../thunk/auth";

const initialState = {
  user: null,
  loading: false,
  accessToken: null,
  refreshToken: null,
  error: null,
  isLoggedIn: false, // Thêm trạng thái isLoggedIn để theo dõi trạng thái đăng nhập
};

const authenticationReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    REGISTER_REQUEST: (state, action) => {
      state.loading = true;
    },
    REGISTER_SUCCESS: (state, action) => {
      state.loading = false;
      state.error = null;
      state.accessToken = action.payload.accessToken || null;
      state.refreshToken = action.payload.refreshToken || null;
    },
    REGISTER_FAILED: (state, action) => {
      state.loading = false;
      state.accessToken = null;
      state.refreshToken = null;
      state.error = action.payload;
    },
    LOGIN_REQUEST: (state, action) => {
      state.loading = true;
    },
    LOGIN_SUCCESS: (state, action) => {
      state.loading = false;
      state.error = null;
      state.accessToken = action.payload.accessToken || null;
      state.refreshToken = action.payload.refreshToken || null;
      state.isLoggedIn = true;
    },
    LOGIN_FAILED: (state, action) => {
      state.loading = false;
      state.accessToken = null;
      state.refreshToken = null;
      state.error = action.payload;
    },
    LOAD_CURRENT_LOGIN_USER_REQUEST: (state, action) => {
      state.loading = true;
    },
    LOAD_CURRENT_LOGIN_USER_SUCCESS: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    LOAD_CURRENT_LOGIN_USER_FAILED: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    REFRESH_TOKEN_SUCCESS: (state, action) => {
      state.loading = false;
      state.accessToken = action.payload.accessToken || null;
      state.refreshToken = action.payload.refreshToken || null;
      state.error = null;
    },
    REFRESH_TOKEN_FAILED: (state, action) => {
      state.loading = false;
      state.accessToken = null;
      state.refreshToken = null;
      state.error = action.payload;
    },
    LOGOUT: (state, action) => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(REGISTER_REQUEST, (state, action) => {
        return {
          ...state,
          loading: true,
        };
      })
      .addCase(REGISTER_SUCCESS, (state, action) => {
        return {
          ...state,
          loading: false,
          error: null,
          accessToken: action.payload.accessToken || null,
          refreshToken: action.payload.refreshToken || null,
        };
      })
      .addCase(REGISTER_FAILED, (state, action) => {
        return {
          ...state,
          loading: false,
          accessToken: null,
          refreshToken: null,
          error: action.payload,
        };
      })
      .addCase(LOGIN_REQUEST, (state, action) => {
        return {
          ...state,
          loading: true,
        };
      })
      .addCase(LOGIN_SUCCESS, (state, action) => {
        return {
          ...state,
          loading: false,
          error: null,
          accessToken: action.payload.accessToken || null,
          refreshToken: action.payload.refreshToken || null,
        };
      })
      .addCase(LOGIN_FAILED, (state, action) => {
        return {
          ...state,
          loading: false,
          accessToken: null,
          refreshToken: null,
          error: action.payload,
        };
      })
      .addCase(LOAD_CURRENT_LOGIN_USER_REQUEST, (state, action) => {
        return { ...state, loading: true };
      })
      .addCase(LOAD_CURRENT_LOGIN_USER_SUCCESS, (state, action) => {
        return {
          ...state,
          loading: false,
          user: action.payload,
        };
      })
      .addCase(LOAD_CURRENT_LOGIN_USER_FAILED, (state, action) => {
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      })
      .addCase(REFRESH_TOKEN_SUCCESS, (state, action) => {
        return {
          ...state,
          loading: false,
          accessToken: action.payload.accessToken || null,
          refreshToken: action.payload.refreshToken || null,
          error: null,
        };
      })
      .addCase(REFRESH_TOKEN_FAILED, (state, action) => {
        return {
          ...state,
          loading: false,
          accessToken: null,
          refreshToken: null,
          error: action.payload,
        };
      })
      .addCase(LOGOUT, (state, action) => {
        return initialState;
      });
  },
});

export const {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOAD_CURRENT_LOGIN_USER_REQUEST,
  LOAD_CURRENT_LOGIN_USER_SUCCESS,
  LOAD_CURRENT_LOGIN_USER_FAILED,
  REFRESH_TOKEN_SUCCESS,
  REFRESH_TOKEN_FAILED,
  LOGOUT,
} = authenticationReducer.actions;

export const userSelector = (state) => state.auth;

export default authenticationReducer.reducer;

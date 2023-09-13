import axios from "axios";
import { store } from "../stores/app.store";
import { URL_CONSTANTS } from "../constants/url.constants";
import { history } from "./history";

class Http {
  constructor() {
    this.huydev = axios.create({
      baseURL: `http://localhost:8080`,
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.huydev.interceptors.request.use((config) => {
      const accessToken = store.getState().auth.accessToken;
      if (accessToken) {
        config.headers["Authorization"] = `Bearer ${accessToken}`;
      }
      return config;
    });

    this.huydev.interceptors.response.use(
      (res) => res,
      async (err) => {
        console.log(err);
        if (err.response && err.response.status === 400) {
          const originalRequest = err.config;
          const refreshToken = store.getState().auth.refreshToken;
          console.log(refreshToken);
          //authorization.
          if (
            err.response.data.errors.authorization.msg.message ===
              "jwt expired" &&
            err.response.data.errors.authorization.msg.status === 402
          ) {
            if (refreshToken) {
              try {
                const response = await this.huydev.post("/auth/refresh-token", {
                  refreshToken: refreshToken,
                });
                store.dispatch({
                  type: REFRESH_TOKEN_SUCCESS,
                  payload: {
                    accessToken: response.data.result.accessToken,
                    refreshToken: response.data.result.refreshToken,
                  },
                });
                this.huydev.defaults.headers.common["Authorization"] =
                  response.data.result.accessToken;
                originalRequest.headers["Authorization"] =
                  response.data.result.accessToken;

                return this.huydev(originalRequest);
              } catch (error) {
                history.push(URL_CONSTANTS.LOGIN);
              }
            } else {
              console.log("Refresh token not available.");
              history.push(URL_CONSTANTS.LOGIN);
            }
          }
        }
        return Promise.reject(err);
      }
    );
  }

  async get(url, params) {
    try {
      const response = await this.huydev.get(url, { params });
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to make GET request.");
    }
  }

  async post(url, data) {
    try {
      const response = await this.huydev.post(url, data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to make POST request.");
    }
  }

  async update(url, data) {
    try {
      const response = await this.huydev.put(url, data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to make PUT request.");
    }
  }

  async patch(url, data) {
    try {
      const response = await this.huydev.patch(url, data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to make PATCH request.");
    }
  }

  async delete(url, id) {
    try {
      const response = await this.huydev.delete(url, id);
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to make DELETE request.");
    }
  }
}

export default Http;

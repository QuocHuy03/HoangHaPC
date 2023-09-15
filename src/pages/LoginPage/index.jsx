import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import Layout from "../../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../stores/authentication/actions";
import Loading from "../../components/Loading";
import { URL_CONSTANTS } from "../../constants/url.constants";
import { history } from "../../helpers/history";
import { message } from "antd";

const getGoogleAuthUrl = () => {
  const url = `https://accounts.google.com/o/oauth2/v2/auth`;
  const query = {
    client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
    redirect_uri: import.meta.env.VITE_GOOGLE_AUTHORIZED_REDIRECT_URI,
    response_type: "code",
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ].join(" "),
    prompt: "consent",
    access_type: "offline",
  };
  const qs = new URLSearchParams(query);
  return `${url}?${qs.toString()}`;
};

export default function LoginPage() {
  const oauthURL = getGoogleAuthUrl();
  const navigate = useNavigate();
  const [validationErrors, setValidationErrors] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const loading = useSelector((state) => state.auth.loading);
  const { redirectTo } = useSelector((state) => state.redirect);
  console.log(redirectTo);

  const { email, password } = inputs;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    let data = {
      email,
      password,
    };

    try {
      const response = await dispatch(login(data));
      if (response.status === true) {
        setValidationErrors([]);
        message.success(response.message);
        if (redirectTo) {
          navigate(redirectTo);
        } else {
          navigate("/dashboard");
        }
      } else {
        setValidationErrors(
          Object.values(response.response.errors).map((error) => error.msg)
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div
        className="global-popup-content"
        style={{
          marginTop: "40px",
        }}
      >
        <div className="item-left-auth">
          <img
            src="https://i.imgur.com/1xOiHz7.png"
            alt="popup"
            className="lazy loading"
            data-was-processed="true"
          />
        </div>
        <div className="item-right-auth" id="js-popup-holder">
          <div className="popup-content-group d-block" id="js-popup-login">
            <div className="box-title-auth">
              <p>Đăng nhập bằng Email</p>
              <p>
                <Link to={"/register"}>Đăng ký</Link> nếu chưa có tài khoản.
              </p>
            </div>
            <form className="input-holder-auth" onSubmit={handleSubmit}>
              <div className="input-box-auth">
                <input
                  type="text"
                  placeholder="Email"
                  onChange={handleChange}
                  name="email"
                />
              </div>
              <div className="input-box-auth input-password">
                <input
                  type="password"
                  placeholder="Mật khẩu"
                  onChange={handleChange}
                  name="password"
                />
                <a className="icons icon-eye" />
              </div>
              {submitted && validationErrors && (
                <p
                  className="mt-1 red"
                  id="js-popup-login-note"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {validationErrors.map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </p>
              )}
              <div className="d-flex flex-wrap align-items-center justify-content-end">
                <a className="btn-forgot-password" href="/reset-password">
                  Quên mật khẩu ?
                </a>

                <button
                  className="popup-btn btn-login"
                  style={{ color: "white", border: "none" }}
                >
                  {loading && <Loading />} Đăng nhập
                </button>
              </div>
              <div className="text-center">
                <p
                  className="text-16 mb-text-14"
                  style={{ margin: "0 0 24px 0" }}
                >
                  - Hoặc đăng nhập bằng -
                </p>
                <div className="popup-icons-group">
                  <Link to={oauthURL} className="icons icon-google"></Link>
                  <Link to={"/login"} className="icons icon-facebook" />
                </div>
                <p className="m-0 mb-text-12-lh-16">
                  Bằng việc tiếp tục, bạn đã chấp nhận{" "}
                  <a
                    href
                    style={{ textDecoration: "underline", color: "inherit" }}
                    target="_blank"
                  >
                    điều khoản sử dụng
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

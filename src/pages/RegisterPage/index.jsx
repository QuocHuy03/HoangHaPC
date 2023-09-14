import React, { useState } from "react";
import Layout from "../../components/Layout";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/Loading";
import { URL_CONSTANTS } from "../../constants/url.constants";

export default function RegisterPage() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const loading = useSelector((state) => state.auth.loading);
  const accessToken = useSelector((state) => state.auth.accessToken);

  const { email, password } = inputs;
  const dispatch = useDispatch();

  useEffect(() => {
    if (accessToken) {
      history.push(URL_CONSTANTS.HOME);
    }
  }, [dispatch, accessToken]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (email && password) {
      dispatch(login(email, password));
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
            src="https://hoanghapc.vn/template/2022/images/popup-customer-bg.png"
            alt="popup"
            className="lazy loading"
            data-was-processed="true"
          />
        </div>
        <div className="item-right-auth" id="js-popup-holder">
          <div className="popup-content-group d-block" id="js-popup-login">
            <div class="popup-btn-direction">
              <Link to={"/login"} class="btn-back"></Link>
            </div>
            <div className="box-title-auth">
              <p>Tạo tài khoản</p>
              <p>Vui lòng cho chúng tôi biết thông tin về bạn</p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="input-holder-auth"
              style={{ padding: "6px" }}
            >
              <div className="input-box-auth">
                <input
                  type="text"
                  onChange={handleChange}
                  placeholder="Fullname"
                  name="fullname"
                />
              </div>
              <div className="input-box-auth">
                <input
                  type="text"
                  onChange={handleChange}
                  placeholder="Username"
                />
              </div>
              <div className="input-box-auth">
                <input
                  type="text"
                  onChange={handleChange}
                  placeholder="Email"
                  name="email"
                />
              </div>

              <div className="d-flex flex-wrap justify-content-between">
                <div
                  className="input-box-auth input-password"
                  style={{ width: "48%" }}
                >
                  <input
                    type="password"
                    onChange={handleChange}
                    placeholder="Password"
                    name="password"
                  />
                  <a className="icons icon-eye" />
                </div>
                <div
                  className="input-box-auth input-password"
                  style={{ width: "48%" }}
                >
                  <input
                    type="password"
                    onChange={handleChange}
                    placeholder="Confirm Password"
                    name="confirm_password"
                  />
                  <a className="icons icon-eye" />
                </div>
              </div>
              {submitted && !email && (
                <p
                  className="mt-1 red"
                  id="js-popup-login-note"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {/* // note */}
                </p>
              )}
              <div className="d-flex flex-wrap align-items-center justify-content-end">
                {loading && <Loading />}
                <button
                  className="popup-btn btn-login"
                  style={{ color: "white", border: "none" }}
                >
                  Tạo tài khoản
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

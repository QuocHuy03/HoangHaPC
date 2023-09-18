import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/Loading";
import { URL_CONSTANTS } from "../../constants/url.constants";
import { history } from "../../helpers/history";
import { message } from "antd";
import { register } from "../../stores/authentication/actions";

export default function RegisterPage() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordConfirmVisible, setPasswordConfirmVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const togglePasswordConfirmVisibility = () => {
    setPasswordConfirmVisible(!passwordConfirmVisible);
  };
  const [isPassword, setIsPassword] = useState("");
  const [isPasswordConfirm, setIsPasswordConfirm] = useState("");

  // Hàm xử lý sự kiện cho nút tắt hiển thị mật khẩu
  const handlePasswordChange = (e) => {
    setIsPassword(e.target.value);
  };
  const handlePasswordconfirmChange = (e) => {
    setIsPasswordConfirm(e.target.value);
  };

  const navigate = useNavigate();
  const [validationErrors, setValidationErrors] = useState([]);
  const [inputs, setInputs] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const loading = useSelector((state) => state.auth.loading);
  const accessToken = useSelector((state) => state.auth.accessToken);

  const { fullname, username, email, password, confirm_password } = inputs;
  const dispatch = useDispatch();

  useEffect(() => {
    if (accessToken) {
      history.push(URL_CONSTANTS.LOGIN);
    }
  }, [dispatch, accessToken]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    let data = {
      fullname,
      username,
      email,
      password: isPassword,
      confirm_password: isPasswordConfirm,
    };

    try {
      const response = await dispatch(register(data));
      if (response.status === true) {
        setValidationErrors([]);
        message.success(response.message);
        navigate(URL_CONSTANTS.LOGIN);
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
                  name="username"
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
                    type={passwordVisible ? "text" : "password"}
                    onChange={handlePasswordChange}
                    placeholder="Password"
                    value={isPassword}
                    name="password"
                  />
                  {/* Nút hiện mật khẩu */}
                  <a
                    className={`icons ${
                      passwordVisible ? "fa fa-eye-slash" : " fa fa-eye"
                    }`}
                    onClick={togglePasswordVisibility}
                  ></a>
                </div>
                <div
                  className="input-box-auth input-password"
                  style={{ width: "48%" }}
                >
                  <input
                    type={passwordConfirmVisible ? "text" : "password"}
                    onChange={handlePasswordconfirmChange}
                    placeholder="Confirm Password"
                    value={isPasswordConfirm}
                    name="confirm_password"
                  />
                  {/* Nút hiện mật khẩu */}
                  <a
                    className={`icons ${
                      passwordConfirmVisible ? "fa fa-eye-slash" : " fa fa-eye"
                    }`}
                    onClick={togglePasswordConfirmVisibility}
                  ></a>
                  {/* Nút tắt hiển thị mật khẩu */}
                </div>
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
                <button
                  className="popup-btn btn-login"
                  style={{ color: "white", border: "none" }}
                >
                  {loading && <Loading />} Tạo tài khoản
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

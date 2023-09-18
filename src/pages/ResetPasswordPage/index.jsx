import React, { useEffect, useState } from "react";
import { userService } from "../../services/user.service";
import Layout from "../../components/Layout";
import { useLocation } from "react-router-dom";
import Loading from "../../components/Loading";
import { message } from "antd";

export default function ResetPasswordPage() {
  const location = useLocation();
  const [isForgotPasswordToken, setIsForgotPasswordToken] = useState(null);
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const forgotPasswordToken = searchParams.get("forgot_password_token");
    setIsForgotPasswordToken(forgotPasswordToken);
  }, [location.search]);
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

  const [validationErrors, setValidationErrors] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [inputs, setInputs] = useState({
    password: "",
    confirm_password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "password") {
      setIsPassword(value);
    } else if (name === "confirm_password") {
      setIsPasswordConfirm(value);
    }
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    let data = {
      forgot_password_token: isForgotPasswordToken,
      password: inputs.password,
      confirm_password: inputs.confirm_password,
    };
    try {
      const response = await userService.resetPassword(data);
      if (response.status === true) {
        setValidationErrors([]);
        message.success(response.message);
      } else {
        if (response?.status === false) {
          setValidationErrors([]);
          message.error(response.message);
        }
        setValidationErrors(
          Object.values(response.errors).map((error) => error.msg)
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
            <div className="box-title-auth">
              <p>Đặt lại mật khẩu của bạn</p>
              <p>Nhập mật khẩu mới bên dưới để thay đổi mật khẩu của bạn.</p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="input-holder-auth"
              style={{ padding: "6px" }}
            >
              <div className="input-box-auth input-password">
                <input
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Mật khẩu"
                  onChange={handleChange}
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
              <div className="input-box-auth input-password">
                <input
                  type={passwordConfirmVisible ? "text" : "password"}
                  onChange={handleChange}
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
                  type="submit"
                  className="popup-btn btn-login"
                  style={{ color: "white", border: "none" }}
                >
                  {submitted && <Loading />} Đặt lại mật khẩu
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

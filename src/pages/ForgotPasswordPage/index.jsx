import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import Loading from "../../components/Loading";
import { userService } from "../../services/user.service";
import { message } from "antd";

export default function ForgotPasswordPage() {
  const [validationErrors, setValidationErrors] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [inputs, setInputs] = useState({
    email: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    let data = {
      email: inputs.email,
    };

    try {
      const response = await userService.forgotPassword(data);
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
      // setSubmitted(false);
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
              <p>Quên mật khẩu tài khoản</p>
              <p>
                Nhập địa chỉ email của bạn dưới đây và hệ thống sẽ gửi cho bạn
                một liên kết để đặt lại mật khẩu
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="input-holder-auth"
              style={{ padding: "6px" }}
            >
              <div className="input-box-auth">
                <input
                  type="email"
                  placeholder="Nhập email của bạn..."
                  name="email"
                  onChange={handleChange}
                />
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
                  {submitted && <Loading />} Lấy lại mật khẩu
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

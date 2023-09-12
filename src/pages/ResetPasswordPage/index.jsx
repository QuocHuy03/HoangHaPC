import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";

export default function ResetPasswordPage() {
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

            <div className="input-holder-auth" style={{ padding: "6px" }}>
              <div className="input-box-auth">
                <input
                  type="text"
                  placeholder="Nhập email của bạn..."
                  id="js-popup-login-email"
                />
              </div>

              <div className="d-flex flex-wrap align-items-center justify-content-end">
                <a className="popup-btn btn-login" style={{ color: "white" }}>
                  Lấy lại mật khẩu
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

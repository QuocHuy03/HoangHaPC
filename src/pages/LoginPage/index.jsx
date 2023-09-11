import React from "react";
import Layout from "../../components/Layout";

export default function LoginPage() {
  return (
    <Layout>
      <div className="global-popup-content" style={{
        marginTop: "40px"
      }}>
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
            <div className="popup-btn-direction justify-content-end">
              <a href="/" />
              <a
                className="fas fa-times close-popup mb-icons"
                aria-hidden="true"
              />
            </div>
            <div className="box-title-auth">
              <p>Đăng nhập bằng Email</p>
              <p>
                <a>Đăng ký</a> nếu chưa có tài khoản.
              </p>
            </div>
            <div className="input-holder-auth">
              <div className="input-box-auth">
                <input
                  type="text"
                  placeholder="Email"
                  id="js-popup-login-email"
                />
              </div>
              <div className="input-box-auth input-password">
                <input
                  type="password"
                  placeholder="Mật khẩu"
                  id="js-popup-login-password"
                />
                <a className="icons icon-eye" onclick="show_hide_pass(this)" />
              </div>
              <p
                className="mt-1 red"
                id="js-popup-login-note"
                style={{ whiteSpace: "pre-line" }}
              >
                {/* // note */}
              </p>
              <div className="d-flex flex-wrap align-items-center justify-content-end">
                <a
                  className="btn-forgot-password"
                >
                  Quên mật khẩu ?
                </a>
                <a className="popup-btn btn-login">Đăng nhập</a>
              </div>
              <div className="text-center">
                <p
                  className="text-16 mb-text-14"
                  style={{ margin: "0 0 24px 0" }}
                >
                  - Hoặc đăng nhập bằng -
                </p>
                <div className="popup-icons-group">
                  <a
                    onclick="open_oauth('Google')"
                    className="icons icon-google"
                  />
                  <a
                    onclick="open_oauth('Facebook')"
                    className="icons icon-facebook"
                  />
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
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
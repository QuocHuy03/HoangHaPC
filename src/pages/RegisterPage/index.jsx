import React from "react";

import Layout from "../../components/Layout";

export default function RegisterPage() {
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
              <a class="btn-back" onclick="_showCustomerPopup('login')"></a>
              <a
                class="fas fa-times close-popup mb-icons"
                onclick="_closeCustomerPopup();"
                aria-hidden="true"
              ></a>
            </div>
            <div className="box-title-auth">
              <p>Đăng nhập bằng Email</p>
              <p>Vui lòng cho chúng tôi biết thông tin về bạn</p>
            </div>

            <div className="input-holder-auth">
              <div className="input-box-auth">
                <input
                  type="text"
                  placeholder="Tên bạn"
                  id="js-popup-login-email"
                />
              </div>
              <div className="input-box-auth">
                <input
                  type="text"
                  placeholder="Email"
                  id="js-popup-login-email"
                />
              </div>

              <div className="d-flex flex-wrap justify-content-between">
                <div
                  className="input-box-auth input-password"
                  style={{ width: "48%" }}
                >
                  <input
                    type="password"
                    placeholder="Mật khẩu"
                    id="js-popup-login-password"
                  />
                  <a
                    className="icons icon-eye"
                    onclick="show_hide_pass(this)"
                  />
                </div>
                <div
                  className="input-box-auth input-password"
                  style={{ width: "48%" }}
                >
                  <input
                    type="password"
                    placeholder="Nhập lại mật khẩu"
                    id="js-popup-login-password"
                  />
                  <a
                    className="icons icon-eye"
                    onclick="show_hide_pass(this)"
                  />
                </div>
              </div>

              <p
                className="mt-1 red"
                id="js-popup-login-note"
                style={{ whiteSpace: "pre-line" }}
              >
                {/* // note */}
              </p>
              <div className="d-flex flex-wrap align-items-center justify-content-end">
                <a className="popup-btn btn-login">Tạo tài khoản</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

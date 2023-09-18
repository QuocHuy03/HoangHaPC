import React from "react";
import "./style.css";
import Layout from "../../components/Layout";

export default function CheckoutPage() {
  return (
    <Layout>
      <div className="global-breadcrumb">
        <div className="container">
          <ol
            itemScope
            itemType="http://schema.org/BreadcrumbList"
            className="ul clearfix"
          >
            <li
              itemProp="itemListElement"
              itemScope
              itemType="http://schema.org/ListItem"
            >
              <a href="/" itemProp="item" className="nopad-l">
                <span itemProp="name">Trang chủ</span>
              </a>
              <meta itemProp="position" content={1} />
            </li>
            <li
              itemProp="itemListElement"
              itemScope
              itemType="http://schema.org/ListItem"
            >
              <a
                href="https://hoanghapc.vn/cart"
                itemProp="item"
                className="nopad-l"
              >
                <span itemProp="name"> Thông tin giỏ hàng </span>
              </a>
              <meta itemProp="position" content={2} />
            </li>
          </ol>
        </div>
      </div>

      <div className="cart-page container">
          <React.Fragment>
            <div className="page-title d-inline-flex align-items-baseline">
              <h1 className="mb-0 blue-2 font-700">Thanh toán</h1>
            </div>
            <form className="row" encType="multipart/form-data">
              <div className="col-8">
                <div className="cart-items-group">
            123
              
                </div>
        
              </div>
              <div className="col-4">
                <div className="cart-customer-group">
                  <div className="cart-customer-holder">
                    <p className="title blue-2">Thông tin thanh toán</p>
                    <p style={{ margin: "0 0 16px 0" }}>
                      Để tiếp tục đặt hàng, quý khách xin vui lòng{" "}
                      <a
                        href="javascript:void(0)"
                        onclick="_showCustomerPopup('login')"
                        className="font-800 blue-2"
                      >
                        đăng nhập
                      </a>{" "}
                      hoặc nhập thông tin bên dưới
                    </p>
                    <input
                      type="text"
                      placeholder="Họ tên người nhận hàng"
                      className="form-input"
                      name="user_info[name]"
                      id="buyer_name"
                      defaultValue
                    />
                    <input
                      type="text"
                      placeholder="Số điện thoại người nhận"
                      className="form-input"
                      name="user_info[tel]"
                      id="buyer_tel"
                      defaultValue
                    />
                    <input
                      type="text"
                      placeholder="Email"
                      className="form-input"
                      name="user_info[email]"
                      id="buyer_email"
                      defaultValue
                    />
                    <input
                      type="text"
                      placeholder="Địa chỉ nhận hàng"
                      className="form-input"
                      name="user_info[address]"
                      id="buyer_address"
                      defaultValue
                    />
                    <textarea
                      className="form-input"
                      placeholder="Ghi chú"
                      name="user_info[note]"
                      id="buyer_note"
                      defaultValue={""}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-submit-cart js-send-cart"
                  >
                    <b>Đặt hàng</b>
                    <span>
                      Tư vấn viên sẽ gọi điện thoại xác nhận, không mua không
                      sao
                    </span>
                  </button>
                  {/*-mot so bien khac chi de front-end*/}
                  <input type="hidden" name="send_order" defaultValue="yes" />
                  <input
                    type="hidden"
                    id="js-total-before-fee-discount"
                    defaultValue={27650000}
                  />
                  <input
                    type="hidden"
                    id="js-member-point-used"
                    name="use_member_point"
                    defaultValue={0}
                  />
                  <input
                    type="hidden"
                    id="js-fee-memberpoint"
                    defaultValue={0}
                  />
                  <input
                    type="hidden"
                    id="js-discount-voucher"
                    defaultValue={0}
                  />
                  <input
                    type="hidden"
                    name="coupon_code"
                    defaultValue
                    id="js_coupon_code"
                  />
                  <input
                    type="hidden"
                    id="js-discount-membership"
                    defaultValue={0}
                  />
                  <input
                    type="hidden"
                    name="shipping_fee"
                    id="js-fee-shipping"
                    defaultValue={0}
                  />
                  <input
                    type="hidden"
                    name="cod_fee"
                    id="js-fee-cod"
                    defaultValue={0}
                  />
                </div>
              </div>
            </form>
          </React.Fragment>
      </div>
    </Layout>
  );
}

import React, { useState } from "react";
import "./style.css";
import Layout from "../../components/Layout";
import { useQuery } from "@tanstack/react-query";
import { paymentService } from "../../services/payment.service";
import Loading from "../../components/Loading";

export default function CheckoutPage() {
  const [activeItem, setActiveItem] = useState(1);
  const handleClickPayment = (itemId) => {
    setActiveItem(itemId);
  };
  const { data, isloading } = useQuery(
    ["payment"],
    () => paymentService.fetchAllPayments(),
    {
      retry: 3,
      retryDelay: 1000,
    }
  );
  console.log(data);
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
                <span itemProp="name"> Thông tin thanh toán </span>
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
              <div className="teko-card css-t9nop0">
                <div className="teko-card-header css-0">
                  <div>
                    <div type="title" className="css-1p6ero0">
                      Phương thức thanh toán
                    </div>
                    <div
                      type="body"
                      color="textSecondary"
                      className="css-kgtmqg"
                    >
                      Thông tin thanh toán của bạn sẽ luôn được bảo mật
                    </div>
                  </div>
                </div>
                <div className="teko-card-body css-0">
                  <div
                    className="teko-row teko-row-start css-80kmv8"
                    style={{
                      marginLeft: "-8px",
                      marginRight: "-8px",
                      rowGap: 16,
                    }}
                  >
                    {isloading ? (
                      <Loading />
                    ) : (
                      data?.map((huyit) => (
                        <div
                          className="teko-col teko-col-6 css-gr7r8o"
                          style={{ paddingLeft: 8, paddingRight: 8 }}
                        >
                          <div
                            key={huyit._id}
                            className={`${
                              activeItem === huyit._id
                                ? "css-1014eaz"
                                : "css-64rk53"
                            }`}
                            onClick={() => handleClickPayment(huyit._id)}
                            style={{ height: "100%" }}
                          >
                            <div type="subtitle" className="css-qat15y">
                              {huyit.namePayment}
                              <span style={{ paddingLeft: 5 }}>
                                {huyit.shouldusePayment == "true" ? (
                                  <span className="css-1fh7f3v">
                                    <div
                                      type="caption"
                                      color="white"
                                      className="css-7496ip"
                                    >
                                      Khuyên dùng
                                    </div>
                                  </span>
                                ) : (
                                  ""
                                )}
                              </span>
                            </div>
                            <div
                              type="body"
                              color="textSecondary"
                              className="css-ngriz3"
                            >
                              {huyit.descriptionPayment}
                            </div>
                            <div type="body" className="css-9o8e5m" />
                            {activeItem === huyit._id ? (
                              <React.Fragment>
                                <div className="css-18wywdr" />
                                <span className="css-mpv07g">
                                  <svg
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    size={20}
                                    className="css-1kpmq"
                                    color="#ffffff"
                                    height={20}
                                    width={20}
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M5 12.4545L9.375 17L19 7"
                                      stroke="#82869E"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </span>
                              </React.Fragment>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
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
                  />
                  <input
                    type="text"
                    placeholder="Số điện thoại người nhận"
                    className="form-input"
                    name="user_info[tel]"
                  />
                  <input
                    type="text"
                    placeholder="Email"
                    className="form-input"
                    name="user_info[email]"
                  />
                  <input
                    type="text"
                    placeholder="Địa chỉ nhận hàng"
                    className="form-input"
                    name="user_info[address]"
                  />
                  <textarea
                    className="form-input"
                    placeholder="Ghi chú"
                    name="user_info[note]"
                  />
                </div>
                <button type="submit" className="btn-submit-cart js-send-cart">
                  <b>Đặt hàng</b>
                  <span>
                    Tư vấn viên sẽ gọi điện thoại xác nhận, không mua không sao
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
                <input type="hidden" id="js-fee-memberpoint" defaultValue={0} />
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

import React, { useContext, useState } from "react";
import "./style.css";
import Layout from "../../components/Layout";
import { useQuery } from "@tanstack/react-query";
import { paymentService } from "../../services/payment.service";
import Loading from "../../components/Loading";
import { AppContext } from "../../contexts/AppContextProvider";
import { formatPrice } from "../../utils/fomatPrice";

export default function CheckoutPage() {
  const { carts } = useContext(AppContext);

  const totalAmountAll = carts.reduce(
    (total, item) => total + item?.product.price_has_dropped * item.quantity,
    0
  );
  console.log(totalAmountAll);

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
              <div className="css-127zbo8">
                <div className="card-header css-0">
                  <div className="css-1knbux5">
                    <span>Khuyến mãi</span>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="css-x3sjt9"
                      color="link500"
                      id="select-coupon"
                    >
                      <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        className="css-9w5ue6"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.19499 3C5.99608 3 5.80532 3.07902 5.66466 3.21967L3.21967 5.66466C3.07902 5.80532 3 5.99608 3 6.19499V11.085C3 11.2839 3.07902 11.4747 3.21967 11.6153L12.3884 20.784C12.6813 21.0769 13.1562 21.0769 13.4491 20.784L17.1166 17.1166L20.784 13.4491C21.0769 13.1562 21.0769 12.6813 20.784 12.3884L11.6153 3.21967C11.4747 3.07902 11.2839 3 11.085 3H6.19499ZM4.5 6.50565L6.50565 4.5H10.7743L19.1931 12.9187L16.0559 16.0559L12.9187 19.1931L4.5 10.7743V6.50565ZM7.86186 9.2514C7.86186 8.65286 8.34707 8.16765 8.94561 8.16765C9.54415 8.16765 10.0294 8.65286 10.0294 9.2514C10.0294 9.84994 9.54415 10.3351 8.94561 10.3351C8.34707 10.3351 7.86186 9.84994 7.86186 9.2514ZM8.94561 6.66765C7.51865 6.66765 6.36186 7.82444 6.36186 9.2514C6.36186 10.6784 7.51865 11.8351 8.94561 11.8351C10.3726 11.8351 11.5294 10.6784 11.5294 9.2514C11.5294 7.82444 10.3726 6.66765 8.94561 6.66765ZM11.3097 12.9996C11.0168 12.7067 10.5419 12.7067 10.249 12.9996C9.95613 13.2925 9.95613 13.7674 10.249 14.0603L12.3884 16.1996C12.6813 16.4925 13.1562 16.4925 13.449 16.1996C13.7419 15.9067 13.7419 15.4319 13.449 15.139L11.3097 12.9996ZM12.694 10.5545C12.9869 10.2616 13.4618 10.2616 13.7547 10.5545L15.8941 12.6939C16.187 12.9868 16.187 13.4616 15.8941 13.7545C15.6012 14.0474 15.1263 14.0474 14.8334 13.7545L12.694 11.6151C12.4011 11.3223 12.4011 10.8474 12.694 10.5545Z"
                          fill="#82869E"
                        />
                      </svg>
                      &nbsp; Chọn hoặc nhập khuyến mãi
                    </a>
                  </div>
                </div>
                <div className="card-body css-0">
                  <div className="css-twos5s">
                    Đơn hàng chưa đủ điều kiện áp dụng khuyến mãi. Vui lòng mua
                    thêm để áp dụng
                  </div>
                </div>
              </div>
              <div style={{ paddingTop: "1rem" }}></div>
              <div className="teko-col teko-col-4 css-gr7r8o">
                <div className="css-14xqo9c">
                  <div className="card-header css-0">
                    <div className="css-1euuut5">
                      <h5>Thông tin đơn hàng</h5>
                      <a href="/cart">Chỉnh sửa</a>
                    </div>
                  </div>
                  <div className="card-body css-0">
                    <div className="css-9op68y">
                      {carts?.map((item) => (
                        <div className="css-ov1ktg">
                          <div>
                            <div height={80} width={80} className="css-17nqxzh">
                              <picture>
                                <img
                                  className="lazyload css-jdz5ak"
                                  alt="product"
                                  src={item.product.images[0].imagePath}
                                  loading="lazy"
                                  decoding="async"
                                />
                              </picture>
                            </div>
                          </div>
                          <div className="css-f0vs3e">
                            <a
                              target="_blank"
                              href="/products/201201616"
                              aria-label="Image"
                              className="css-587jha"
                            >
                              <div
                                type="body"
                                color="textPrimary"
                                className="css-l4bwcr"
                              >
                                {item.product.nameProduct}
                              </div>
                            </a>
                            <div
                              type="caption"
                              color="textSecondary"
                              className="css-1qm2d75"
                            >
                              Số lượng {item.quantity}
                            </div>
                            <span className="css-7ofbab">
                              {formatPrice(item.product.price_has_dropped)}{" "}
                              <span className="css-1ul6wk9">VNĐ</span>
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="css-cssveg">
                  <div className=" css-27abj6">
                    <div className="teko-card css-516rdm">
                      <div className="teko-card-body css-0">
                        <div className="css-nouyrl">
                          <table className="css-qc9cbn">
                            <tbody>
                              <tr>
                                <td color="#848788" className="css-8ogxmh">
                                  <div className="css-99sejg">
                                    Tổng tạm tính &nbsp;
                                    <div className="css-1777v" />
                                  </div>
                                </td>
                                <td
                                  data-att-label="Tổng tạm tính"
                                  className="css-1xrkmkn"
                                >
                                  <span className="js-total-cart-price">
                                    {formatPrice(totalAmountAll)}
                                  </span>{" "}
                                  VNĐ
                                </td>
                              </tr>
                              <tr>
                                <td color="#848788" className="css-13izjcd">
                                  <div className="css-99sejg">
                                    Phí vận chuyển &nbsp;
                                    <div className="css-1777v" />
                                  </div>
                                </td>
                                <td
                                  data-att-label="Phí vận chuyển"
                                  className="css-fsu5pb"
                                >
                                  Miễn phí
                                </td>
                              </tr>
                              <tr>
                                <td color="#848788" className="css-13izjcd">
                                  Thành tiền{" "}
                                </td>
                                <td className="att-final-price css-aafp0n">
                                {formatPrice(totalAmountAll)}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <div className="css-b2d3vz">(Đã bao gồm VAT)</div>
                        </div>
                      </div>
                      <div className="teko-card-footer css-0">
                        <div
                          data-content-region-name="bottomCheckOut"
                          data-track-content="true"
                          data-content-name="checkout"
                          className="css-0"
                        >
                          <button className="att-checkout-button css-v463h2">
                            <div className="css-1lqe6yk">THANH TOÁN</div>
                          </button>
                        </div>
                        <div className="css-12xhfzh">
                          <p>
                            Nhấn "Thanh toán" đồng nghĩa với việc bạn đọc và
                            đồng ý tuân theo{" "}
                            <a
                              href="https://help.phongvu.vn/chinh-sach-ban-hang/quyen-va-nghia-vu-cac-ben"
                              target="_blank"
                            >
                              Điều khoản và Điều kiện
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="checkoutInlineRight" />
              </div>
            </div>
          </form>
        </React.Fragment>
      </div>
    </Layout>
  );
}

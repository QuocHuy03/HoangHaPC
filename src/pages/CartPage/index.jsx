import React, { useContext, useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { URL_CONSTANTS } from "../../constants/url.constants";
import {
  deleteToCartAll,
  deleteToCartItem,
  getCart,
  updateToCart,
} from "../../stores/cart/actions";
import { formatPrice } from "../../utils/fomatPrice";
import { AppContext } from "../../contexts/AppContextProvider";
import { v4 as uuidv4 } from "uuid";
import createNotification from "../../utils/notification";

export default function CartPage() {
  const dispatch = useDispatch();
  let { carts, user } = useContext(AppContext);

  const totalAmountAll = carts?.reduce(
    (total, item) => total + item?.product.price_has_dropped * item.quantity,
    0
  );

  const handleUpdateCart = async (item, operation) => {
    const updatedItem = { ...item };
    const quantityCart = parseInt(updatedItem.quantity, 10);
    if (operation === "increment") {
      updatedItem.quantity = quantityCart + 1;
    } else if (operation === "decrement") {
      if (updatedItem.quantity > 1) {
        updatedItem.quantity = quantityCart - 1;
      }
    }
    delete updatedItem.product;
    delete updatedItem._id;
    const response = await dispatch(updateToCart(updatedItem));
    if (response.status === true) {
    } else {
      createNotification("error", "topRight", response.message);
    }
  };

  const handleDeleteItem = async (item) => {
    const response = await dispatch(deleteToCartItem(item));
    if (response.status === true) {
      createNotification("success", "topRight", response.message);
    } else {
      createNotification("error", "topRight", response.message);
    }
  };

  const handleDeleteAll = async () => {
    const response = await dispatch(deleteToCartAll());
    if (response.status === true) {
      createNotification("success", "topRight", response.message);
    } else {
      createNotification("error", "topRight", response.message);
    }
  };

  const initialInputValues = {
    fullname: user ? user.fullname : "",
    email: user ? user.email : "",
    address: user ? user.address : "",
    city: user ? user.city : "",
    district: user ? user.district : "",
    commune: user ? user.commune : "",
    phone: user ? user.phone : "",
  };

  const [inputs, setInputs] = useState(initialInputValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };
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
        {carts?.length > 0 ? (
          <React.Fragment>
            <div className="page-title d-inline-flex align-items-baseline">
              <h1 className="mb-0 blue-2 font-700">Giỏ hàng của tôi</h1>
              <span className="text-12 ml-2" id="js-cart-total-item">
                ( {carts?.length} sản phẩm )
              </span>
            </div>
            <form className="row" encType="multipart/form-data">
              <div className="col-8">
                <div className="cart-items-group">
                  {carts?.map((item) => (
                    <div key={item.product._id} className="item js-item-row">
                      <div className="item-left">
                        <span className="item-img">
                          <img src={item.product.image} />
                        </span>
                        <div className="item-text">
                          <div className="item-color">
                            <Link
                              to={`/product/${item.product.slugProduct}`}
                              className="item-name"
                            >
                              {item.product.nameProduct}
                            </Link>
                            <div className="item-name">
                              COLOR :{" "}
                              <span
                                style={{
                                  textTransform: "uppercase",
                                  border: "1px solid #eee",
                                  padding: "4px",
                                  borderRadius: "10px",
                                  backgroundColor: "#a8a8a8",
                                  color: `${item.color}`,
                                }}
                              >
                                {item.color}
                              </span>
                            </div>
                          </div>
                          <p className="item-status">
                            <span style={{ color: "#0DB866" }}>
                              <i className="icons icon-check" />{" "}
                              {item.product.statusProduct === "stocking"
                                ? "Còn Hàng"
                                : "Hết Hàng"}
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="item-right">
                        <div className="item-quantity-holder">
                          <a
                            onClick={() => handleUpdateCart(item, "decrement")}
                            className="js-quantity-change fas fa-minus"
                            aria-hidden="true"
                          />
                          <input
                            type="text"
                            className="js-buy-quantity js-quantity-change"
                            value={item.quantity}
                            min="1"
                            readOnly
                          />
                          <a
                            onClick={() => handleUpdateCart(item, "increment")}
                            className="js-quantity-change fas fa-plus"
                            aria-hidden="true"
                          />
                        </div>

                        <a
                          className="js-delete-item icon-delete"
                          onClick={() => handleDeleteItem(item._id)}
                        />
                        <div className="item-price-holder">
                          <p className="item-price">
                            {formatPrice(item.product.price_has_dropped)} VNĐ
                          </p>
                          <p className="total-item-price">
                            <span className="js-total-item-price">
                              {formatPrice(
                                item.product.price_has_dropped * item.quantity
                              )}
                            </span>{" "}
                            VNĐ
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="item cart-total-summary">
                    <div className="item-left font-700 text-16">
                      Tổng giá trị đơn hàng
                    </div>
                    <div className="item-right cart-total-price">
                      <span className="js-total-cart-price">
                        {formatPrice(totalAmountAll)}
                      </span>{" "}
                      VNĐ
                    </div>
                  </div>
                </div>
                <a
                  href="javascript:void(0)"
                  className="btn-remove-group"
                  onClick={handleDeleteAll}
                >
                  Làm trống giỏ hàng
                </a>
              </div>
              <div className="col-4">
                <div className="cart-customer-group">
                  <div className="cart-customer-holder">
                    <div className="cart-information">
                      <p className="title blue-2">Thông tin thanh toán</p>
                      <Link
                        to={URL_CONSTANTS.PROFILE}
                        className="title-edit-cart"
                      >
                        Chỉnh sửa
                      </Link>
                    </div>
                    {user ? (
                      <p style={{ margin: "0 0 16px 0" }}>
                        Để tiếp tục đặt hàng, quý khách xin vui lòng nhập thông
                        tin bên dưới
                      </p>
                    ) : (
                      <p style={{ margin: "0 0 16px 0" }}>
                        Để tiếp tục đặt hàng, quý khách xin vui lòng{" "}
                        <a className="font-800 blue-2">đăng nhập</a> hoặc nhập
                        thông tin bên dưới
                      </p>
                    )}
                    <input
                      type="text"
                      name="fullname"
                      onChange={handleChange}
                      placeholder="Họ tên người nhận hàng"
                      className="form-input"
                      value={inputs.fullname}
                    />
                    <input
                      type="text"
                      placeholder="Số điện thoại người nhận"
                      className="form-input"
                      name="phone"
                      onChange={handleChange}
                      value={inputs.phone}
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="form-input"
                      name="email"
                      onChange={handleChange}
                      value={inputs.email}
                    />
                    <input
                      type="text"
                      placeholder="Địa chỉ nhận hàng"
                      className="form-input"
                      name="address"
                      onChange={handleChange}
                      value={inputs.address}
                    />
                    <textarea
                      className="form-input"
                      placeholder="Ghi chú"
                      name="note"
                      value={inputs.note}
                    >
                      {inputs.note}
                    </textarea>
                  </div>
                  <Link
                    to={`/checkout/${uuidv4()}`}
                    className="btn-submit-cart js-send-cart"
                  >
                    <b>Đặt hàng</b>
                    <span>
                      Tư vấn viên sẽ gọi điện thoại xác nhận, không mua không
                      sao
                    </span>
                  </Link>
                  {/*-mot so bien khac chi de front-end*/}
                </div>
              </div>
            </form>
          </React.Fragment>
        ) : (
          <div className="mb-5 mt-5 text-center">
            <p
              className="font-weight-bold text-20"
              style={{ lineHeight: "1.3" }}
            >
              {" "}
              Không có sản phẩm nào trong giỏ hàng, vui lòng quay lại{" "}
            </p>
            <Link to={URL_CONSTANTS.HOME} className="blue font-600 text-16">
              <i className="fas fa-arrow-left" aria-hidden="true" /> Quay lại
              trang chủ{" "}
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
}

import React from "react";
import Layout from "../../components/Layout";

const CartPage = () => {
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
        <div className="page-title d-inline-flex align-items-baseline">
          <h1 className="mb-0 blue-2 font-700">Giỏ hàng của tôi</h1>
          <span className="text-12 ml-2" id="js-cart-total-item">
            ( 1 sản phẩm )
          </span>
        </div>
        <form
          className="row"
          method="post"
          encType="multipart/form-data"
          action="/send-cart"
          onsubmit="return check_field()"
        >
          <div className="col-8">
            <div className="cart-items-group">
              <div
                className="item js-item-row"
                data-variant_id={0}
                data-item_id={3668}
                data-item_type="product"
              >
                <div className="item-left">
                  <span className="item-img">
                    <img src="https://hoanghapccdn.com/media/product/120_3668_hhpc_black_12900k_qc.png" />
                  </span>
                  <div className="item-text">
                    <a
                      href="/hh-workstation-black-i9-12900k-32g-nvidia-rtx-3060-12g"
                      className="item-name"
                    >
                      HHPC BLACK RGB i9 12900K | 32G | NVIDIA RTX 3060 12G
                    </a>
                    <p className="item-status">
                      <span style={{ color: "#0DB866" }}>
                        <i className="icons icon-check" /> Còn hàng
                      </span>
                    </p>
                  </div>
                </div>
                <div className="item-right">
                  <div className="item-quantity-holder">
                    {/*--
                      
                      
                      
                          <br />
<b>Notice</b>:  Undefined index: min_purchase in <b>/var/www/html/hoanghapc.vn/public_html/cache/template/shopping_cart_new.1e3edc52e93bc74e04d6c2680eae4bc0.php</b> on line <b>56</b><br />

                          <br />
<b>Notice</b>:  Undefined index: max_purchase in <b>/var/www/html/hoanghapc.vn/public_html/cache/template/shopping_cart_new.1e3edc52e93bc74e04d6c2680eae4bc0.php</b> on line <b>58</b><br />
<br />
<b>Notice</b>:  Undefined index: quantity in <b>/var/www/html/hoanghapc.vn/public_html/cache/template/shopping_cart_new.1e3edc52e93bc74e04d6c2680eae4bc0.php</b> on line <b>58</b><br />

                          
                      
                      -*/}
                    <a
                      href="javascript:void(0)"
                      className="js-quantity-change fas fa-minus"
                      data-value={-1}
                      aria-hidden="true"
                    />
                    <input
                      type="text"
                      className="js-buy-quantity js-quantity-change"
                      defaultValue={1}
                      data-stock
                      data-min
                    />
                    <a
                      href="javascript:void(0)"
                      className="js-quantity-change fas fa-plus"
                      data-value={1}
                      aria-hidden="true"
                    />
                  </div>
                  <a
                    href="javascript:void(0)"
                    className="js-delete-item icon-delete"
                  />
                  <div className="item-price-holder">
                    <input
                      type="hidden"
                      className="bulk_price_config"
                      defaultValue="[]"
                    />
                    <input
                      type="hidden"
                      className="js-buy-price"
                      defaultValue={27650000}
                    />
                    <p className="item-price">27.650.000 VNĐ</p>
                    <p className="total-item-price">
                      <span className="js-total-item-price">27.650.000</span>{" "}
                      VNĐ
                    </p>
                  </div>
                </div>
              </div>
              <div className="item cart-total-summary">
                <div className="item-left font-700 text-16">
                  Tổng giá trị đơn hàng
                </div>
                <div className="item-right cart-total-price">
                  <span className="js-total-cart-price">27.650.000</span> VNĐ
                </div>
              </div>
            </div>
            <a
              href="javascript:void(0)"
              className="btn-remove-group"
              onclick='$(".js-delete-item").click();'
            >
              Làm trống giỏ hàng
            </a>
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
              <input type="hidden" id="js-discount-voucher" defaultValue={0} />
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
      </div>
    </Layout>
  );
};

export default CartPage;

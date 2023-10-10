import React, { useContext, useEffect } from "react";
import { AppContext } from "../../contexts/AppContextProvider";
import { useLocation } from "react-router-dom";
import { orders } from "../../stores/order/actions";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import createNotification from "../../utils/notification";
import Layout from "../../components/Layout";
import "./index.css";
export default function OrderPage() {
  const { order } = useContext(AppContext);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const dispatch = useDispatch();
  const paymentMethod = queryParams.get("paymentMethod");

  const paymentMomo = {
    partnerCode: queryParams.get("partnerCode"),
    orderId: queryParams.get("orderId"),
    requestId: queryParams.get("requestId"),
    amount: queryParams.get("amount"),
    orderInfo: queryParams.get("orderInfo"),
    orderType: queryParams.get("orderType"),
    transId: queryParams.get("transId"),
    message: queryParams.get("message"),
  };

  const paymentVnpay = {
    vnp_Amount: queryParams.get("vnp_Amount"),
    vnp_BankCode: queryParams.get("vnp_BankCode"),
    vnp_BankTranNo: queryParams.get("vnp_BankTranNo"),
    vnp_CardType: queryParams.get("vnp_CardType"),
    vnp_OrderInfo: queryParams.get("vnp_OrderInfo"),
    vnp_TransactionNo: queryParams.get("vnp_TransactionNo"),
  };

  const dispatchOrder = async () => {
    const data = {
      ...order,
      ...(paymentMomo !== null ? {} : paymentMomo),
      ...(paymentVnpay !== null ? {} : paymentVnpay),
    };
    try {
      const response = await dispatch(orders(data, paymentMethod));

      if (response.status === true) {
        createNotification("success", "topRight", response.message);
      } else {
        createNotification("error", "topRight", response.message);
        navigate(`/checkout/${uuidv4()}`);
      }
    } catch (error) {
      console.error(error);
      navigate(`/checkout/${uuidv4()}`);
    }
  };

  useEffect(() => {
    dispatchOrder();
  }, []);

  return <Layout>
    <div className="form-plp-change-pass">
      <div className="content-form-plp-cp">
        <div className="headet-plp-fcp">
          <i className="fa fa-user-circle" aria-hidden="true" />
          <div className="ct-left-fcp">
            <span className="title-fcp-txt">Mật khẩu mới</span>
            <span className="title-fcp-note">
              Bạn chưa có mật khẩu? <a href="/dang-ky">Đăng ký</a>
            </span>
          </div>
        </div>
        <div className="form-fcp-ct-success">
          <p>
            <i className="fa fa-check-circle" aria-hidden="true" /> Mật khẩu mới
            của bạn là:{" "}
            <b>
              {"{"}$new_password{"}"}
            </b>
          </p>
          <p>
            Vui lòng <a href="/dang-nhap">đăng nhập</a> vào tài khoản và đổi mật
            khẩu mới
            <br />
            Mật khẩu của bạn hoàn toàn được an toàn vì chúng tôi mã hóa và không
            ai biết được (kể cả chúng tôi).
          </p>
        </div>
      </div>
    </div>
  </Layout>;
}

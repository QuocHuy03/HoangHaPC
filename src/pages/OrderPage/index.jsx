import React, { useContext, useEffect } from "react";
import { AppContext } from "../../contexts/AppContextProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { orders } from "../../stores/order/actions";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import createNotification from "../../utils/notification";
import Layout from "../../components/Layout";
import "./index.css";
export default function OrderPage() {
  const { order } = useContext(AppContext);
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const dispatch = useDispatch();
  const paymentMethod = queryParams.get("payment");

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
      ...(paymentMomo && paymentMomo.transId !== null ? { paymentMomo } : {}),
      ...(paymentVnpay && paymentVnpay.vnp_BankTranNo !== null ? { paymentVnpay } : {}),
    };
    try {
      const response = await dispatch(orders(data, paymentMethod));

      if (response.status === true) {
        createNotification("success", "topRight", response.message);
      } else {
        createNotification("error", "topRight", response.message);
        // navigate(`/checkout/${uuidv4()}`);
      }
    } catch (error) {
      console.error(error);
      // navigate(`/checkout/${uuidv4()}`);
    }
  };

  useEffect(() => {
    dispatchOrder();
  }, []);

  return (
    <Layout>
      <div className="order-success">
        <div className="content-order-cuccess">Đơn hàng đang xử lý ...</div>
      </div>
    </Layout>
  );
}

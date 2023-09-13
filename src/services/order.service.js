import Http from "../helpers/http";

const http = new Http();

const fetchAllOrders = async () => {
  try {
    const response = await http.get(`/order/getAllOrders`);
    return response.result;
  } catch (error) {
    console.error(error);
  }
};

const fetchOrderByID = async (id) => {
  try {
    const response = await http.get(`/order/getOrderById/${id}`);
    return response.result;
  } catch (error) {
    console.error(error);
  }
};

const fetchPostOrder = async (data) => {
  try {
    const response = await http.get(`/order/postOrder`, data);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const orderService = {
  fetchAllOrders,
  fetchOrderByID,
  fetchPostOrder,
};

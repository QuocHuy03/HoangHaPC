import Http from "../helpers/http";

const http = new Http();

const fetchAllPayments = async() => {
    try {
        const response = await http.get(`/payment/getAllPayments`);
        return response.result;
    } catch (error) {
        console.error(error);
    }
};

const fetchPaymentById = async(id) => {
    try {
        const response = await http.get(`/payment/getPaymentById/${id}`);
        return response.result;
    } catch (error) {
        console.error(error);
    }
};

export const paymentService = {
    fetchAllPayments,
    fetchPaymentById,
};
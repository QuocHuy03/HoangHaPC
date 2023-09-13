import Http from "../helpers/http";

const http = new Http();

const fetchAllCoupons = async () => {
  try {
    const response = await http.get(`/coupon/getAllCoupons`);
    return response.result;
  } catch (error) {
    console.error(error);
  }
};
export const couponService = {
  fetchAllCoupons,
};

import Http from "../helpers/http";

const http = new Http();

const fetchAllPromotions = async () => {
  try {
    const response = await http.get(`/promotion/getAllPromotions`);
    return response.result;
  } catch (error) {
    console.error(error);
  }
};

const fetchPromotionBySlug = async (slug) => {
  try {
    const response = await http.get(`/promotion/getPromotionBySlug/${slug}`);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const promotionService = {
  fetchAllPromotions,
  fetchPromotionBySlug,
};

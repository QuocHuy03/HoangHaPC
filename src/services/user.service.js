import Http from "../helpers/http";

const http = new Http();
const login = async (email, password) => {
  const body = { email, password };
  return await http.post("/auth/login", body).then((response) => {
    return response;
  });
};

export const userService = {
  login,
};

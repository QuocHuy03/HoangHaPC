import Http from "../helpers/http";

const http = new Http();
const login = async (email, password) => {
  const body = { email, password };
  return await http.post("/auth/login", body).then((response) => {
    return response;
  });
};

const register = async (
  fullname,
  username,
  email,
  password,
  confirm_password
) => {
  const body = { fullname, username, email, password, confirm_password };
  return await http.post("/auth/register", body).then((response) => {
    return response;
  });
};

const fetchUserByID = async () => {
    try {
      const response = await http.get(`/auth/me`);
      return response;
    } catch (error) {
      console.error(error);
    }
  };

export const userService = {
  login,
  register,
  fetchUserByID
};

import jwt_decode from 'jwt-decode';

export const verifyToken = async (accessToken) => {
  try {
    const decoded = jwt_decode(accessToken);
    console.log(decoded)
    return decoded;
  } catch (error) {
    
    console.error("Request failed:", error);
    throw error; 
  }
};
import axios from "axios";

const API_BASE_URL = "https://apimocha.com/playgreen/sports";

export const fetchApi = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching api:", error);
    throw error;
  }
};

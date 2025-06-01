import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const searchProducts = async (query, limit = 10, skip = 0) => {
  try {
    const response = await axios.get(`${BASE_URL}/search`, {
      params: {
        q: query,
        limit,
        skip
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
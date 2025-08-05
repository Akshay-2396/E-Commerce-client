// // src/api/wishlistApi.js

// import axios from "axios";

// const BASE_URL = "http://localhost:5000/api";
// const getToken = () => localStorage.getItem("token");

// // GET Wishlist
// export const fetchWishlist = async () => {
//   const response = await axios.get(`${BASE_URL}/wishlist`, {
//     headers: {
//       Authorization: `Bearer ${getToken()}`,
//     },
//   });
//   return response.data;
// };

// // ADD to Wishlist
// export const addToWishlist = async (productId) => {
//   const response = await axios.post(
//     `${BASE_URL}/wishlist`,
//     { _id: productId },
//     {
//       headers: {
//         Authorization: `Bearer ${getToken()}`,
//       },
//     }
//   );
//   return response.data;
// };

// // REMOVE from Wishlist
// export const removeFromWishlist = async (productId) => {
//   const response = await axios.delete(`${BASE_URL}/wishlist/${productId}`, {
//     headers: {
//       Authorization: `Bearer ${getToken()}`,
//     },
//   });
//   return response.data;
// };

// import axios from "axios";
// import { getToken } from "@/lib/utils";
// import { API_BASE_URL } from "@/config";

// // GET Wishlist
// export const fetchWishlist = async () => {
//   const token = getToken();
//   const response = await axios.get(`${API_BASE_URL}/wishlist`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   return response.data;
// };

// // ADD to Wishlist
// export const addToWishlist = async (productId) => {
//   const token = getToken();
//   const response = await axios.post(
//     `${API_BASE_URL}/wishlist`,
//     { _id: productId },
//     {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     }
//   );
//   return response.data;
// };

// // REMOVE from Wishlist
// export const removeFromWishlist = async (productId) => {
//   const token = getToken();
//   const response = await axios.delete(
//     `${API_BASE_URL}/wishlist/${productId}`,
//     {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     }
//   );
//   return response.data;
// };
// // --- Tailwind Utility ---
// import { clsx } from "clsx";
// import { twMerge } from "tailwind-merge";

// export function cn(...inputs) {
//   return twMerge(clsx(inputs));
// }

// // --- Wishlist Utilities ---

// import axiosInstance from "../config/index";
// export const fetchWishlist = async () => {
//   const res = await axiosInstance.get("/wishlist");
//   return res.data;
// };

// export const addToWishlist = async (productId) => {
//   const res = await axiosInstance.post("/wishlist", { _id: productId });
//   return res.data.wishlist;
// };

// export const removeFromWishlist = async (productId) => {
//   await axiosInstance.delete(`/wishlist/${productId}`);
// };


// --- Axios Config ---
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api", // or change to your production URL
  withCredentials: true,
});

// Add token to every request
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default axiosInstance;

// --- Tailwind Utility ---
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
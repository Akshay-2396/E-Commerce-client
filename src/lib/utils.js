// // --- Tailwind Utility ---
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// --- Wishlist Utilities ---

import axiosInstance from "../config/index";
export const fetchWishlist = async () => {
  const res = await axiosInstance.get("/wishlist");
  return res.data;
};

export const addToWishlist = async (productId) => {
  const res = await axiosInstance.post("/wishlist", { _id: productId });
  return res.data.wishlist;
};

export const removeFromWishlist = async (productId) => {
  await axiosInstance.delete(`/wishlist/${productId}`);
};

// import axios from "axios";

// axios.defaults.baseURL = "http://localhost:5000/api";
// axios.defaults.withCredentials = true;

// // ✅ Fetch wishlist
// export const fetchWishlist = async () => {
//   const res = await axios.get("/wishlist");
//   return res.data;
// };

// // ✅ Add to wishlist
// export const addToWishlist = async (productId) => {
//   const res = await axios.post("/wishlist", { productId });
//   return res.data;
// };

// // ✅ Remove from wishlist
// export const removeFromWishlist = async (productId) => {
//   const res = await axios.delete(`/wishlist/${productId}`);
//   return res.data;
// };
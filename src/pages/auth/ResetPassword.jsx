import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { id, token } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `https://e-commerce-server-1-vca8.onrender.com/api/auth/reset-password/${id}/${token}`,
        { password }
      );
      if (res.status === 200 || res.status === 201) {
        toast.success(res.data.message),
          navigate("/auth/login"),
          {
            position: "top-center",
          };
      } else {
        toast.error(" Failed!", {
          position: "top-center",
        });
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong!", {
        position: "top-center",
      });
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-500">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Reset Password
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-950"
            />
          </div>
          <div className="text-right">
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-gray-900 text-sm hover:underline italic"
            >
              {showPassword ? "Hide" : "Show"} password
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-gray-950 text-white py-2 rounded-md hover:bg-gray-900 transition"
          >
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;

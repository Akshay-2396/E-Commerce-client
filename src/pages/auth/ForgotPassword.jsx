import { useState } from "react";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await axios.post(
        "https://e-commerce-server-z1c3.onrender.com/api/auth/forgot-password",
        {
          email,
        }
      );

      if (res.status === 200) {
        setMessage("Reset email sent. Check your inbox.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Failed to send reset email.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-500">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md max-w-md"
      >
        <h2 className="text-xl mb-4 text-center font-bold">Forgot Password</h2>
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          Email Id
        </label>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-gray-950"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-gray-950 text-white py-2 px-4 rounded hover:bg-gray-900 transition mt-3"
        >
          Send
        </button>
        {message && <p className="mt-4 text-center text-sm">{message}</p>}
      </form>
    </div>
  );
};

export default ForgotPassword;

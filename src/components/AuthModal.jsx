import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AuthModal({ type = "login", onClose }) {
  const isLogin = type === "login";
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const BASE_URL = import.meta.env.VITE_API_URL;

  const handleChange = (e) => {
    console.log(e.target.value)
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const endpoint = isLogin ? `${BASE_URL}/api/auth/login` : `${BASE_URL}/api/auth/register`; 
      const payload = isLogin ? {
        email: formData.email,
        password: formData.password
      } : formData;

      const response = await axios.post(endpoint, payload);

      const { token } = response.data;

      // Save token to localStorage
      localStorage.setItem("token", token);
      onClose();
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.msg || "Something went wrong");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg w-96 relative shadow-lg">
        <button onClick={onClose} className="absolute top-2 right-4 text-xl font-bold text-gray-600">×</button>
        <h2 className="text-2xl font-bold mb-4">
          {isLogin ? "Login to Job Tracker" : "Sign Up for Job Tracker"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded"
              required
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded"
            required
          />
          <div className="relative">
            <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded pr-10"
                required
            />
            <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute inset-y-0 right-3 flex items-center text-xl text-gray-600 focus:outline-none"
            >
                {showPassword ? "🙈" : "👁️"}
            </button>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button type="submit" className="w-full px-4 py-2 bg-darkblue text-white font-bold rounded hover:bg-darkest">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
}

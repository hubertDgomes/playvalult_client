import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaGoogle,
  FaGithub,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import bg1 from "../../assets/bg1.png";
import Container from "../Container";
import axios from "axios";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_LINK}/api/login`,
        {
          email,
          password,
        },
        { withCredentials: true },
      );
      if(res.data.user){
        localStorage.setItem("pv-user" , JSON.stringify(res.data.user))
      }
      alert(res.data?.message ?? "Login Successfully done!");
      window.location.href = "/";
    } catch (err) {
      if (err.response) {
        alert(err.response.data.message ?? "Something went wrong!");
      } else if (err.request) {
        alert("Network error. No response from server.");
      } else {
        alert("Internal Server Error");
      }
    }
  };

  return (
    <div
      className="min-h-screen bg-no-repeat bg-cover bg-center flex items-center justify-center font-Jakarta relative py-20 px-4"
      style={{ backgroundImage: `url(${bg1})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* Decorative Glows */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#00F2FF]/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-[#00F2FF]/10 blur-[120px] rounded-full"></div>

      <Container className="relative z-10">
        <div className="max-w-md mx-auto">
          {/* Form Card */}
          <div className="bg-[#1a1c21]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tight">
                WELCOME <span className="text-[#00F2FF]">BACK</span>
              </h2>
              <p className="text-gray-400 text-sm md:text-base">
                Initialize your session to continue your journey.
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleLogin}>
              {/* Email Field */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-300 ml-1">
                  Email
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500 group-focus-within:text-[#00F2FF] transition-colors">
                    <FaEnvelope />
                  </div>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="name@example.com"
                    className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#00F2FF]/50 focus:ring-1 focus:ring-[#00F2FF]/50 transition-all"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <div className="flex justify-between items-center ml-1">
                  <label className="text-sm font-semibold text-gray-300">
                    Password
                  </label>
                </div>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500 group-focus-within:text-[#00F2FF] transition-colors">
                    <FaLock />
                  </div>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 pl-12 pr-12 text-white placeholder-gray-600 focus:outline-none focus:border-[#00F2FF]/50 focus:ring-1 focus:ring-[#00F2FF]/50 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-white transition-colors"
                  >
                    {showPassword ? (
                      <FaEyeSlash size={18} />
                    ) : (
                      <FaEye size={18} />
                    )}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#00F2FF] hover:bg-[#00d8e6] text-black font-black py-4 rounded-2xl shadow-[0_0_20px_rgba(0,242,255,0.3)] transition-all transform active:scale-[0.98] mb-4"
              >
                LOGIN
              </button>
            </form>

            {/* Footer Link */}
            <p className="text-center mt-10 text-gray-400 text-sm">
              New User?{" "}
              <Link
                to="/signup"
                className="text-[#00F2FF] font-bold hover:underline"
              >
                Create new account
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;

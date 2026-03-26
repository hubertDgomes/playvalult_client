import React, { useState } from "react";
import Container from "../Container";
import Images from "../Images";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { PiShoppingCartThin } from "react-icons/pi";
import axios from "axios";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const storedUser = localStorage.getItem("pv-user");
  const user = storedUser ? JSON.parse(storedUser) : null;

  const handleLogout = async () => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_LINK}/api/logout`, {}, {
        withCredentials: true,
      });
      localStorage.removeItem("pv-user");
      alert(res.data?.message ?? "Logout successful!");
      window.location.href = "/";
    } catch (err) {
      if (err.response) {
        alert(err.response.data.message ?? "Logout failed");
      } else if (err.request) {
        alert("Network error. No response from server.");
      } else {
        alert("Internal Server Error");
      }
    }
  };

  return (
    <>
      <div className="font-Jakarta py-4 md:py-6 absolute w-full top-0 left-0 z-50">
        <Container>
          <div className="flex justify-between items-center relative z-50">
            <div className="flex items-center gap-x-3">
              <Images src={logo} className="w-8 md:w-auto" />
            </div>
            <div className="hidden lg:flex gap-x-13 font-bold text-[16px] text-white">
              <Link to={"/"}>Home</Link>
              <Link to={"/store"}>Store</Link>
              <Link to={"/library"}>Library</Link>
              <Link to={"/wishlist"}>Wishlist</Link>
            </div>
            <div className="flex gap-x-4 md:gap-x-8 items-center justify-between">
              {user ? (
                <>
                  <Link to={"/cart"}>
                    <PiShoppingCartThin className="text-[28px] md:text-[30px] cursor-pointer text-white" />
                  </Link>
                  <span className="hidden sm:block text-white font-bold text-sm md:text-base">
                    {user.fullName}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="hidden sm:block bg-[#0a0a0a] border-white border px-4 md:px-6 py-2 md:py-3 text-white rounded-[8px] cursor-pointer font-extrabold text-sm md:text-base"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to={"/signup"}>
                    <button className="hidden sm:block bg-[#19e5f0] border-[#19e5f0] border px-4 md:px-6 py-2 md:py-3 text-black rounded-[8px] cursor-pointer font-extrabold text-sm md:text-base">
                      Sign Up
                    </button>
                  </Link>
                  <Link to={"/login"}>
                    <button className="hidden sm:block bg-[#0a0a0a] border-white border px-4 md:px-6 py-2 md:py-3 text-white rounded-[8px] cursor-pointer font-extrabold text-sm md:text-base">
                      Log In
                    </button>
                  </Link>
                </>
              )}
              <button
                className="lg:hidden text-white ml-2 cursor-pointer transition-transform duration-200 hover:scale-110 relative z-[60]"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {menuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </Container>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/95 z-40 transition-transform duration-300 ease-in-out flex flex-col items-center justify-center font-Jakarta ${menuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
      >
        <div className="flex flex-col gap-y-8 font-bold text-2xl text-white text-center w-full px-6">
          <Link
            to={"/"}
            className="hover:text-[#19e5f0] transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to={"/store"}
            className="hover:text-[#19e5f0] transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Store
          </Link>
          <Link
            to={"/library"}
            className="hover:text-[#19e5f0] transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Library
          </Link>
          <Link
            to={"/wishlist"}
            className="hover:text-[#19e5f0] transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Wishlist
          </Link>
          <div className="flex flex-col gap-y-4 mt-8 sm:hidden w-full">
            {user ? (
              <>
                <Link to={"/cart"} onClick={() => setMenuOpen(false)}>
                  <button className="bg-[#19e5f0] border-[#19e5f0] border w-full py-3 text-black rounded-[8px] cursor-pointer font-extrabold text-lg transition-transform hover:scale-105">
                    Cart
                  </button>
                </Link>
                <div className="text-white font-bold text-center">
                  {user.fullName}
                </div>
                <button
                  onClick={() => {
                    handleLogout();
                    setMenuOpen(false);
                  }}
                  className="bg-transparent border-white border w-full py-3 text-white rounded-[8px] cursor-pointer font-extrabold text-lg transition-transform hover:scale-105"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to={"/signup"}>
                  <button
                    onClick={() => setMenuOpen(false)}
                    className="bg-[#19e5f0] border-[#19e5f0] border w-full py-3 text-black rounded-[8px] cursor-pointer font-extrabold text-lg transition-transform hover:scale-105"
                  >
                    Sign Up
                  </button>
                </Link>
                <Link to={"/login"}>
                  <button
                    onClick={() => setMenuOpen(false)}
                    className="bg-transparent border-white border w-full py-3 text-white rounded-[8px] cursor-pointer font-extrabold text-lg transition-transform hover:scale-105"
                  >
                    Log In
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

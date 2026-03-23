import React from "react";
import Container from "../Container";
import Images from "../Images";
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom";
import { PiShoppingCartThin } from "react-icons/pi";


const Navbar = () => {
  return (
    <>
      <div className="font-Jakarta py-6 absolute w-full ">
        <Container>
          <div className="flex justify-between items-center">
            <div className="">
                <Images src={logo} />
            </div>
            <div className="flex gap-x-13 font-bold text-[16px] ">
                <Link>Home</Link>
                <Link>Library</Link>
                <Link>Store</Link>
                <Link>Wishlist</Link>
            </div>
            <div className="flex gap-x-8 items-center justify-between">
                <PiShoppingCartThin  className="text-[30px] cursor-pointer" />
                <button className="bg-[#19e5f0] border px-6 py-3 text-black rounded-[8px] cursor-pointer font-extrabold">Sign Up</button>
                <button className="bg-[#0a0a0a] border px-6 py-3 text-white rounded-[8px] cursor-pointer font-extrabold">Log Up</button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Navbar;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../Container";
import Images from "../Images";
import cart from "../../assets/cart.png";
import MainButton from "../MainButton";
import axios from "axios";
import { FaTrashAlt, FaShieldAlt } from "react-icons/fa";

const Games = ({ logo, title, price, id, onRemove }) => {
  return (
    <>
      <div className="bg-[#1a1c21]/60 backdrop-blur-md border border-white/5 p-4 md:p-6 rounded-3xl transition-all hover:border-[#00F2FF]/30 group w-full md:w-[773px]">
        <div className="flex gap-4 md:gap-7 items-center md:items-stretch">
          <div className="shrink-0 relative overflow-hidden rounded-2xl">
            <Images
              className={
                "w-[100px] h-[120px] md:w-[128px] md:h-[160px] object-cover transition-transform duration-500 group-hover:scale-110"
              }
              src={logo}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>

          <div className="flex flex-col justify-between flex-grow py-1">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-black text-xl md:text-2xl text-white group-hover:text-[#00F2FF] transition-colors line-clamp-1">
                  {title}
                </h3>
                <p className="text-gray-500 text-[10px] md:text-xs font-bold bg-white/5 px-2 py-1 rounded mt-2 inline-block">
                  INSTANT DELIVERY
                </p>
              </div>
              <p className="text-[#00F2FF] font-black text-xl md:text-2xl">
                ${price}
              </p>
            </div>

            <div className="flex justify-between items-end mt-4">
              <button
                onClick={() => onRemove(id)}
                className="flex items-center gap-2 text-gray-500 hover:text-red-500 text-xs md:text-sm font-bold transition-colors py-2 px-3 rounded-xl hover:bg-red-500/10"
              >
                <FaTrashAlt />
                <span className="hidden md:inline">REMOVE</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Cart = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_LINK}/api/showcart`, {
        withCredentials: true,
      })
      .then((res) => setGames(res.data.cartGames || []));
  }, []);

  const handleRemove = (id) => {
    axios
      .delete(`${import.meta.env.VITE_API_LINK}/api/deletecart/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        alert(res.message ?? "Removed");
        setGames((p) => p.filter((item) => item.games._id !== id));
      });
  };

  let total = 0;
  for (let i = 0; i < games.length; i++) {
    total += parseFloat(games[i].games.price || 0);
  }

  const navigate = useNavigate();

  const handlePurchase = () => {
    navigate("/checkout", {
      state: { total: (total + 0.2), games },
    });
  };
  
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-32 pb-20 font-Jakarta relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00F2FF]/10 blur-[120px] rounded-full -mr-48 -mt-48 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00F2FF]/5 blur-[120px] rounded-full -ml-48 -mb-48 pointer-events-none"></div>

      <Container className="relative z-10">
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight uppercase">
            YOUR <span className="text-[#00F2FF]">CART</span>
          </h1>
          <p className="text-gray-500 text-sm md:text-base font-medium mt-1 uppercase tracking-widest">
            Protocol: 01 // Secure Cluster Activity
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:items-start">
          <div className="flex flex-col gap-6 flex-grow">
            {games.length > 0 ? (
              games.map((item, key) => (
                <Games
                  key={key}
                  logo={item.games.logo}
                  title={item.games.title}
                  price={item.games.price}
                  id={item.games._id}
                  onRemove={handleRemove}
                />
              ))
            ) : (
              <div className="p-20 text-center border border-dashed border-white/10 rounded-3xl bg-white/5">
                <p className="text-gray-500 font-bold uppercase tracking-widest">
                  Your vault is currently empty
                </p>
              </div>
            )}

            <div className="flex items-center gap-3 text-gray-500 text-xs font-bold bg-white/5 p-4 rounded-2xl border border-white/5 mt-4 max-w-[773px]">
              <FaShieldAlt className="text-[#00F2FF]" />
              <p className="uppercase tracking-tighter">
                SECURE TRANSACTION PROTOCOL ACTIVE // ENCRYPTION: AES-256
              </p>
            </div>
          </div>

          <div className="w-full lg:w-[462px] shrink-0 sticky top-32">
            <div className="bg-[#16191E]/60 backdrop-blur-xl border border-white/10 rounded-[40px] p-8 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00F2FF]/10 blur-3xl rounded-full -mr-16 -mt-16"></div>

              <p className="font-black text-xl uppercase tracking-[3px] border-b border-white/10 pb-6 mb-8 group-hover:text-[#00F2FF] transition-colors">
                Order Summary
              </p>

              <div className="space-y-5 mb-10 text-gray-300">
                <div className="flex justify-between items-center group/row">
                  <p className="font-bold text-sm tracking-wider text-gray-500 uppercase">
                    Subtotal
                  </p>
                  <p className="font-black text-lg">${total}</p>
                </div>
                <div className="flex justify-between items-center group/row">
                  <p className="font-bold text-sm tracking-wider text-gray-500 uppercase">
                    Estimated Tax
                  </p>
                  <p className="font-black text-lg">$0.2</p>
                </div>
              </div>

              <div className="flex justify-between items-center border-t border-dashed border-white/10 pt-8 mb-10">
                <p className="text-[#00F2FF] font-black text-lg uppercase tracking-[2px]">
                  Total Estimate
                </p>
                <p className="font-black text-4xl text-white">${total + 0.2}</p>
              </div>

              <MainButton
                onClick={handlePurchase}
                className={
                  "w-full py-5 text-xl shadow-[0_10px_30px_rgba(25,229,240,0.2)] hover:shadow-[0_10px_40px_rgba(25,229,240,0.4)] transition-all transform active:scale-[0.98] mt-4 uppercase font-black"
                }
                text={"PURCHASE FOR MYSELF"}
              />

              <p className="text-center text-[10px] text-gray-600 font-bold mt-6 tracking-[2px] uppercase opacity-60">
                AUTHORIZED SESSION ONLY
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Cart;

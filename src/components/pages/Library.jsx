import React, { useState, useEffect } from "react";
import Container from "../Container";
import Images from "../Images";
import axios from "axios";
import { FaPlay, FaGamepad } from "react-icons/fa";

const GameCard = ({ logo, title }) => {
  return (
    <div className="bg-[#16191E] border border-white/5 rounded-2xl p-4 overflow-hidden group hover:border-[#00F2FF]/30 transition-all">
      <div className="relative overflow-hidden rounded-xl mb-4 group-hover:scale-105 transition-transform duration-500">
        <Images className="w-full h-[220px] object-cover" src={logo} />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button className="bg-[#00F2FF] text-black w-14 h-14 rounded-full flex items-center justify-center text-xl shadow-[0_0_20px_#00F2FF]">
            <FaPlay className="ml-1" />
          </button>
        </div>
      </div>
      <h3 className="font-bold text-white truncate text-sm uppercase tracking-wider mb-2">
        {title}
      </h3>
      <div className="flex justify-between items-center text-[10px] text-gray-500 font-bold uppercase tracking-widest">
        <span>Purchased</span>
      </div>
    </div>
  );
};

const Library = () => {
  // Sample static data for now as per user request
  const [sampleGames, setSampleGames] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_LINK}/api/getlibrary`, {
        withCredentials: true,
      })
      .then((res) => setSampleGames(res.data.buyGames));
  }, []);

  console.log(sampleGames);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-32 pb-20 font-Jakarta">
      <Container>
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-12 bg-[#00F2FF]/10 rounded-xl flex items-center justify-center border border-[#00F2FF]/20">
            <FaGamepad className="text-2xl text-[#00F2FF]" />
          </div>
          <div>
            <h1 className="text-4xl font-black uppercase tracking-tighter">
              My <span className="text-[#00F2FF]">Collection</span>
            </h1>
            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[3px]">
              Total Games Ready to Play {sampleGames.length}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {sampleGames.map((game, i) => (
            <GameCard key={i} title={game.games.title} logo={game.games.logo} />
          ))}

          {/* Visual Placeholder */}
          <div className="border border-dashed border-white/5 rounded-2xl flex items-center justify-center p-8 bg-white/2 hover:bg-white/5 transition-colors cursor-pointer group">
            <p className="text-[10px] text-gray-700 group-hover:text-gray-500 font-black uppercase text-center tracking-widest">
              Expand Library <br /> via Store
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Library;

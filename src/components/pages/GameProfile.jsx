import React, { useEffect, useState } from "react";
import Images from "../Images";
import bg1 from "../../assets/bg2.png";
import Container from "../Container";
import MainButton from "../MainButton";
import { useParams } from "react-router-dom";
import axios from "axios";
const GameProfile = () => {
  const { id } = useParams();
  console.log(id);
  const [game, setGame] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_LINK}/api/getgamebyid/${id}`)
      .then((res) => setGame(res.data));
  }, []);

  console.log(game);

  if (!game) {
    return (
      <>
        <h1>Loading......</h1>
      </>
    );
  }

  const minimum = game.systemRequirements?.minimum;
  const recommended = game.systemRequirements?.recommended;

  return (
    <>
      <div className="font-Jakarta bg-black text-white min-h-screen">
        <div className="relative w-full overflow-hidden">
          <Images
            src={game.coverImage}
            className="w-full h-[60vh] md:h-auto lg:max-h-[800px] object-cover brightness-50 transition-all duration-700 hover:scale-105"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent h-1/2 pointer-events-none"></div>
          <div className="absolute bottom-10 left-4 md:bottom-20 md:left-10 lg:bottom-32 lg:left-20 max-w-4xl px-4 md:px-0">
            <h1 className="font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-[96px] leading-[1.1] text-[#00F2FF] drop-shadow-2xl">
              {game.title}
            </h1>
            <p className="font-light text-base md:text-xl lg:text-[20px] max-w-2xl my-6 md:my-10 text-gray-200 leading-relaxed">
              {game.shortDescription}
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <MainButton
                text={`Buy Now — $${game.price}`}
                className="shadow-lg transform active:scale-95 transition-transform"
              />
              <button className="px-6 py-3 border border-white/20 backdrop-blur-md bg-white/5 hover:bg-white/10 rounded-xl cursor-pointer font-bold transition-all duration-300">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>

        <div className="bg-black py-12 md:py-20">
          <Container>
            <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-16">
              <div className="w-full lg:w-3/5">
                <h2 className="font-extrabold text-3xl md:text-[36px] text-[#00F2FF] mb-6">
                  About This Game
                </h2>
                <div className="text-gray-300 text-base md:text-[18px] leading-8 md:leading-[40px] space-y-4">
                  <p>{game.shortDescription}</p>
                </div>
              </div>

              <div className="p-6 md:p-10 bg-[#16191E] border border-white/5 rounded-2xl w-full lg:w-2/5 flex flex-col gap-y-6 md:gap-y-8 shadow-2xl">
                <p className="text-sm md:text-[15px] font-extrabold text-[#00F2FF] uppercase tracking-wider">
                  Game Metadata
                </p>
                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                  <p className="text-gray-400 text-sm md:text-[16px]">
                    Developer
                  </p>
                  <p className="font-medium text-sm md:text-[16px] text-white">
                    {game.developer}
                  </p>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                  <p className="text-gray-400 text-sm md:text-[16px]">
                    Publisher
                  </p>
                  <p className="font-medium text-sm md:text-[16px] text-white">
                    {game.publisher}
                  </p>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                  <p className="text-gray-400 text-sm md:text-[16px]">
                    Release Date
                  </p>
                  <p className="font-medium text-sm md:text-[16px] text-white text-right">
                    {game.releaseDate}
                  </p>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                  <p className="text-gray-400 text-sm md:text-[16px]">Genre</p>
                  <p className="font-medium text-sm md:text-[16px] text-white">
                    Action RPG, Sci-Fi
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-gray-400 text-sm md:text-[16px]">
                    Platforms
                  </p>
                  <p className="font-medium text-sm md:text-[16px] text-white">
                    {game.platform}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-20">
              <h2 className="font-extrabold text-3xl md:text-[36px] mb-10 text-white">
                System Requirements
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Minimum Specs */}
                <div className="p-6 md:p-10 bg-[#16191E] border border-white/5 rounded-2xl flex flex-col gap-y-6 md:gap-y-8 shadow-2xl">
                  <p className="text-sm md:text-[15px] font-extrabold text-[#00F2FF] uppercase tracking-wider">
                    Minimum Specs
                  </p>
                  <div className="space-y-4 md:space-y-6">
                    <div className="flex justify-between items-start border-b border-white/5 pb-4">
                      <p className="text-gray-400 text-sm md:text-[16px] w-1/3">
                        OS
                      </p>
                      <p className="font-medium text-sm md:text-[16px] text-white w-2/3 text-right">
                        {minimum?.os}
                      </p>
                    </div>
                    <div className="flex justify-between items-start border-b border-white/5 pb-4">
                      <p className="text-gray-400 text-sm md:text-[16px] w-1/3">
                        Processor
                      </p>
                      <p className="font-medium text-sm md:text-[16px] text-white w-2/3 text-right">
                        {minimum?.processor}
                      </p>
                    </div>
                    <div className="flex justify-between items-start border-b border-white/5 pb-4">
                      <p className="text-gray-400 text-sm md:text-[16px] w-1/3">
                        Memory
                      </p>
                      <p className="font-medium text-sm md:text-[16px] text-white w-2/3 text-right">
                        {minimum?.memory}
                      </p>
                    </div>
                    <div className="flex justify-between items-start border-b border-white/5 pb-4">
                      <p className="text-gray-400 text-sm md:text-[16px] w-1/3">
                        Graphics
                      </p>
                      <p className="font-medium text-sm md:text-[16px] text-white w-2/3 text-right">
                        {minimum?.graphics}
                      </p>
                    </div>
                    <div className="flex justify-between items-start">
                      <p className="text-gray-400 text-sm md:text-[16px] w-1/3">
                        Storage
                      </p>
                      <p className="font-medium text-sm md:text-[16px] text-white w-2/3 text-right">
                        {minimum?.storage}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Recommended Specs */}
                <div className="p-6 md:p-10 bg-[#16191E] border border-white/5 rounded-2xl flex flex-col gap-y-6 md:gap-y-8 shadow-2xl">
                  <p className="text-sm md:text-[15px] font-extrabold text-[#00F2FF] uppercase tracking-wider">
                    Recommended Specs
                  </p>
                  <div className="space-y-4 md:space-y-6">
                    <div className="flex justify-between items-start border-b border-white/5 pb-4">
                      <p className="text-gray-400 text-sm md:text-[16px] w-1/3">
                        OS
                      </p>
                      <p className="font-medium text-sm md:text-[16px] text-white w-2/3 text-right">
                        {recommended?.os}
                      </p>
                    </div>
                    <div className="flex justify-between items-start border-b border-white/5 pb-4">
                      <p className="text-gray-400 text-sm md:text-[16px] w-1/3">
                        Processor
                      </p>
                      <p className="font-medium text-sm md:text-[16px] text-white w-2/3 text-right">
                        {recommended?.processor}
                      </p>
                    </div>
                    <div className="flex justify-between items-start border-b border-white/5 pb-4">
                      <p className="text-gray-400 text-sm md:text-[16px] w-1/3">
                        Memory
                      </p>
                      <p className="font-medium text-sm md:text-[16px] text-white w-2/3 text-right">
                        {recommended?.memory}
                      </p>
                    </div>
                    <div className="flex justify-between items-start border-b border-white/5 pb-4">
                      <p className="text-gray-400 text-sm md:text-[16px] w-1/3">
                        Graphics
                      </p>
                      <p className="font-medium text-sm md:text-[16px] text-white w-2/3 text-right">
                        {recommended?.graphics}
                      </p>
                    </div>
                    <div className="flex justify-between items-start">
                      <p className="text-gray-400 text-sm md:text-[16px] w-1/3">
                        Storage
                      </p>
                      <p className="font-medium text-sm md:text-[16px] text-white w-2/3 text-right">
                        {recommended?.storage}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default GameProfile;

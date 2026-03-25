import React, { useEffect, useState } from "react";
import Container from "../Container";
import Images from "../Images";
import main1 from "../../assets/main.png";
import MainButton from "../MainButton";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";
import axios from "axios";
import { data, Link } from "react-router-dom";
// import game from "../../assets/game.png";

const Store = () => {
  const [newGames, setNewGames] = useState([]);
  const [allGames, setAllGames] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_LINK}/api/getallnewgames`)
      .then((res) => setNewGames(res.data));
  }, []);

  // console.log(newGames);

  useEffect(() => {
    axios
    .get(`${import.meta.env.VITE_API_LINK}/api/getallgames`)
      .then((res) => setAllGames(res.data));
  }, []);

  // console.log(allGames);

  const [adventure, setAdventure] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_LINK}/api/getcategorybyname/Adventure`)
      .then((res) => setAdventure(res.data[0].games));
  }, []);

  // console.log(adventure);

  const [rpg, setRpg] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_LINK}/api/getcategorybyname/RPG`)
      .then((res) => setRpg(res.data[0].games));
  }, []);

  console.log(rpg);

  const NewRelease = ({ bgImage, title, description, id }) => {
    return (
      <div className="relative overflow-hidden group rounded-2xl">
        <Images
          src={bgImage}
          className="w-full h-[50vh] md:h-[60vh] lg:h-[70vh] object-cover brightness-[0.7] transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        <div className="p-6 md:p-12 lg:p-16 absolute bottom-0 left-0 w-full lg:w-3/4 flex flex-col items-start gap-4">
          <p className="font-bold text-xs md:text-sm text-[#00F2FF] uppercase tracking-widest bg-[#00F2FF]/10 px-3 py-1 rounded-full backdrop-blur-sm">
            New Release
          </p>
          <h2 className="font-extrabold text-2xl md:text-4xl lg:text-[64px] leading-tight text-white drop-shadow-lg">
            {title}
          </h2>
          <p className="hidden md:block text-gray-200 text-sm md:text-lg lg:text-xl max-w-2xl line-clamp-2 md:line-clamp-none">
            {description}
          </p>
          <div className="mt-4">
            <Link to={`/gameprofile/${id}`}>
              <MainButton
                text="View Details"
                className="shadow-lg transform active:scale-95 transition-all"
              />
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const Games = ({ logo, category, title, price }) => {
    return (
      <div className="group relative font-Jakarta w-full cursor-pointer overflow-hidden rounded-xl bg-[#16191E] transition-all duration-300 hover:translate-y-[-8px] hover:shadow-[0_20px_50px_rgba(0,242,255,0.15)]">
        <div className="relative h-[300px] md:h-[400px] overflow-hidden">
          <Images
            src={logo}
            className="w-full h-full object-cover brightness-90 transition-transform duration-500 group-hover:scale-110 group-hover:brightness-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#16191E] via-transparent to-transparent opacity-60"></div>
        </div>
        <div className="p-5 flex flex-col gap-3">
          <p className="font-bold text-[10px] px-3 py-1.5 w-fit bg-[#272A31] text-[#00F2FF] rounded-md uppercase tracking-wider">
            {category}
          </p>
          <p className="font-extrabold text-lg md:text-xl text-white line-clamp-1">
            {title}
          </p>
          <div className="flex justify-between items-center mt-2">
            <p className="font-black text-xl text-[#00F2FF]">${price}</p>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-sm font-bold text-white/50 underline">
                Details
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="bg-black md:py-30 font-Jakarta">
        <Container>
          <div className="py-6 md:py-10">
            <Swiper
              modules={[Autoplay, EffectFade]}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              loop={true}
              slidesPerView={1}
              className="rounded-3xl shadow-2xl overflow-hidden"
            >
              {newGames.map((item, key) => (
                <SwiperSlide key={key}>
                  <NewRelease
                    bgImage={item?.coverImage}
                    title={item.title}
                    description={item.shortDescription}
                    id={item._id}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="mt-16 md:mt-24 px-4 md:px-0">
            <div className="flex justify-between items-end mb-10">
              <h2 className="font-extrabold text-2xl md:text-[35px] text-white">
                Featured & Recommended
              </h2>
              <p className="text-[#00F2FF] font-semibold cursor-pointer hover:underline text-sm md:text-base">
                View All
              </p>
            </div>

            <Swiper
              slidesPerView={1.2}
              spaceBetween={16}
              breakpoints={{
                480: { slidesPerView: 2, spaceBetween: 16 },
                768: { slidesPerView: 3, spaceBetween: 24 },
                1024: { slidesPerView: 4, spaceBetween: 30 },
              }}
              className="pb-16"
            >
              {allGames.map((item, key) => (
                <SwiperSlide key={key}>
                  <Link to={`/gameprofile/${item._id}`}>
                    <Games
                      logo={item?.logo}
                      price={item?.price}
                      category={item?.platform}
                      title={item?.title}
                    />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* ========================================== */}

          <div className="mt-16 md:mt-24 px-4 md:px-0">
            <div className="flex justify-between items-end mb-10">
              <h2 className="font-extrabold text-2xl md:text-[35px] text-white">
                Explore the Adventure games
              </h2>
              <p className="text-[#00F2FF] font-semibold cursor-pointer hover:underline text-sm md:text-base">
                View All
              </p>
            </div>

            <Swiper
              slidesPerView={1.2}
              spaceBetween={16}
              breakpoints={{
                480: { slidesPerView: 2, spaceBetween: 16 },
                768: { slidesPerView: 3, spaceBetween: 24 },
                1024: { slidesPerView: 4, spaceBetween: 30 },
              }}
              className="pb-16"
            >
              {adventure?.map((item, key) => (
                <SwiperSlide key={key}>
                  <Link to={`/gameprofile/${item._id}`}>
                    <Games
                      logo={item?.logo}
                      price={item?.price}
                      category={item?.platform}
                      title={item?.title}
                    />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* =============================================== */}

          <div className="mt-16 md:mt-24 px-4 md:px-0">
            <div className="flex justify-between items-end mb-10">
              <h2 className="font-extrabold text-2xl md:text-[35px] text-white">
                Explore the Some RPG
              </h2>
              <p className="text-[#00F2FF] font-semibold cursor-pointer hover:underline text-sm md:text-base">
                View All
              </p>
            </div>

            <Swiper
              slidesPerView={1.2}
              spaceBetween={16}
              breakpoints={{
                480: { slidesPerView: 2, spaceBetween: 16 },
                768: { slidesPerView: 3, spaceBetween: 24 },
                1024: { slidesPerView: 4, spaceBetween: 30 },
              }}
              className="pb-16"
            >
              {rpg.length == 0 ? (
                <h1 className="text-center text-[20px] font-bold">Coming Soon. Stay Tuned</h1>
              ) : (
                rpg?.map((item, key) => (
                  <SwiperSlide key={key}>
                    <Link to={`/gameprofile/${item._id}`}>
                      <Games
                        logo={item?.logo}
                        price={item?.price}
                        category={item?.platform}
                        title={item?.title}
                      />
                    </Link>
                  </SwiperSlide>
                ))
              )}
            </Swiper>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Store;

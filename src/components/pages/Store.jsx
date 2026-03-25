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
import { data } from "react-router-dom";


const Store = () => {

  const [newGames , setNewGames] = useState([])

  useEffect(()=> {
    axios.get("http://localhost:3000/api/getallnewgames")
    .then((res) => setNewGames(res.data))
  },[])

  console.log(newGames);
  

  const NewRelease = ({bgImage , title , description}) => {
    return (
      <>
        <div className="relative">
          <Images src={bgImage} className={"brightness-80 lg:w-full  mt-60 lg:mt-0"} />
          <div className="p-3 md:p-[50px] absolute bottom-[20px] left-2 bg-white/10 backdrop-blur-md">
            <p className="font-semibold text-[15px] text-[#00F2FF]">
              Now Released
            </p>
            <p className="md:w-[390px] font-extrabold text-[15px] lg:text-[50px] ">
              {title}
            </p>
            <p className="hidden md:block w-[512px] text-[20px] mb-3">
              {description}
            </p>
            <MainButton text={"View Details"} />
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="bg-black md:py-30 font-Jakarta">
        <Container>
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            // spaceBetween={50}
            slidesPerView={1}
          >
            {newGames.map((item , key)=>(
              <SwiperSlide>
              <NewRelease bgImage={item?.coverImage} title={item.title} description={item.shortDescription} />
            </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </div>
    </>
  );
};

export default Store;

import React from "react";
import bg1 from "../../assets/bg1.png";
import bg2 from "../../assets/cta.jpg";
import Container from "../Container";
import MainButton from "../MainButton";
import Images from "../Images";
import logo1 from "../../assets/fet1.png";
import logo2 from "../../assets/fet2.png";
import logo3 from "../../assets/fet3.png";
import dash from "../../assets/dashboard.png";
const TextPart = ({ number, text }) => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex text-4xl md:text-[50px] text-center font-bold">
          <p>{number}</p>
          {/* <p>+</p> */}
        </div>
        <p className="text-sm md:text-[20px] font-light">{text}</p>
      </div>
    </>
  );
};

const Feature = ({ head, text, link, logo }) => {
  return (
    <>
      <div className="p-6 bg-[#32353C] w-full md:w-[373px] font-Jakarta flex flex-col items-center md:items-start text-center md:text-left">
        <Images src={logo} />
        <p className="font-bold text-[24px] mt-6">{head}</p>
        <p className="text-[16px] mt-4">{text}</p>
        <p className="mt-3 font-semibold text-[14px] text-[#00F2FF]">{link}</p>
      </div>
    </>
  );
};

const Home = () => {
  return (
    <>
      <div
        className="bg-no-repeat bg-cover bg-center py-32 md:py-60 font-Jakarta"
        style={{ backgroundImage: `url(${bg1})` }}
      >
        <Container>
          <div className="text-center px-4 md:px-0">
            <p className="text-[#B9CACB] text-[12px] py-1 w-[250px] rounded-2xl mx-auto bg-[#272A31]">
              Servers Online: Global Cluster 01
            </p>
            <h1 className="w-full md:w-[672px] mx-auto font-extrabold text-5xl md:text-[96px] leading-tight md:leading-none my-6 md:my-0">
              ENTER THE <span className="text-[#19e5f0]">HORIZON</span>
            </h1>
            <p className="w-full md:w-[645px] mx-auto text-base md:text-[20px] mb-10 text-gray-300">
              Experience the next evolution of PC gaming. Uncompromising
              performance, limitless social integration, and a curated library
              of the world's most immersive titles.
            </p>

            <MainButton text={"START YOUR JOURNEY"} />

            <div className="grid grid-cols-2 lg:flex justify-around gap-y-8 lg:gap-y-0 mt-10">
              <TextPart number={"21+"} text={"Active Users"} />
              <TextPart number={"15K"} text={"Titles Online"} />
              <TextPart number={"99.9%"} text={"Uptime Sync"} />
              <TextPart number={"0.1MS"} text={"Input Latency"} />
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="py-10 md:py-20 font-Jakarta">
          <h1 className="font-bold text-3xl md:text-[36px] text-center md:text-left">ENGINEERED FOR SUPREMACY</h1>
          <p className="text-base md:text-[18px] font-light text-[#B9CACB] w-full md:w-[540px] text-center md:text-left mx-auto md:mx-0 mt-4 md:mt-0">
            Every feature is designed to reduce the distance between you and the
            digital worlds you love.
          </p>
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-stretch gap-y-8 lg:gap-y-0 mt-10">
            <Feature
              logo={logo1}
              head={"Vast Library"}
              text={
                "Access over 15,000 curated titles from indie breakthroughs to legendary AAA franchises, all in one unified ecosystem."
              }
              link={"Explore Store"}
            />
            <Feature
              logo={logo2}
              head={"Global Community"}
              text={
                "Integrated voice, high-fidelity streaming, and persistent social hubsconnect you with millions of players worldwide."
              }
              link={"Join Hub"}
            />
            <Feature
              logo={logo3}
              head={"Seamless Cross-play"}
              text={
                "Your progress follows you. Start on your desktop, pick up on your mobile, and finish on your console without missing a beat."
              }
              link={"Learn More"}
            />
          </div>
        </div>
      </Container>

      <div className="bg-black font-Jakarta">
        <Container className={"py-10 "}>
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-y-10 lg:gap-y-0">
            <div className="text-center lg:text-left">
              <h2 className="font-extrabold text-4xl md:text-[48px] leading-tight md:leading-none mb-4 md:mb-0">
                COMMAND THE <span className="text-[#00F2FF]">MAINFRAME</span>
              </h2>
              <p className="w-full lg:w-[584px] text-base md:text-[18px] text-gray-300">
                Our native client isn't just a launcher; it's a high-performance
                terminal. Monitor system thermals, optimize frame rates in real-
                time, and manage your neural-link downloads with zero overhead.
              </p>
            </div>
            <div className="w-full lg:w-auto px-4 lg:px-0 flex justify-center">
              <Images src={dash} className="w-full max-w-[600px] lg:max-w-full" />
            </div>
          </div>
        </Container>
        <div
          className="bg-no-repeat bg-cover bg-center font-Jakarta"
          style={{ backgroundImage: `url(${bg2})` }}
        >
          <div className="bg-black/70 py-32 md:py-60 px-4 md:px-0">
            <Container>
              <h1 className="text-white font-extrabold text-5xl md:text-[72px] w-full md:w-[486px] mx-auto text-center leading-tight md:leading-none">JOIN THE <span className="text-[#00F2FF]">REVOLUTION</span></h1>
              <p className="text-center text-base md:text-[20px] mt-6 md:mt-3 text-gray-300">The horizon is waiting. Are you ready to transcend the ordinary?</p>
              <div className="flex justify-center mt-5">
                <MainButton text={"CREATE ACCOUNT"}/>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

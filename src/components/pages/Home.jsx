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
        className="bg-no-repeat bg-cover bg-center py-20 md:py-40 lg:py-60 font-Jakarta relative"
        style={{ backgroundImage: `url(${bg1})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <Container className="relative z-10">
          <div className="text-center px-4 md:px-0">
            <p className="inline-block text-[#B9CACB] text-[10px] md:text-[12px] py-1.5 px-6 rounded-full bg-[#272A31]/80 backdrop-blur-sm mb-8 border border-white/5">
              🚀 Servers Online: Global Cluster 01
            </p>
            <h1 className="w-full max-w-[800px] mx-auto font-extrabold text-4xl sm:text-5xl md:text-7xl lg:text-[96px] leading-[1.1] mb-6 drop-shadow-2xl">
              ENTER THE <span className="text-[#19e5f0]">HORIZON</span>
            </h1>
            <p className="w-full max-w-[700px] mx-auto text-base md:text-lg lg:text-[20px] mb-12 text-gray-200 leading-relaxed">
              Experience the next evolution of PC gaming. Uncompromising
              performance, limitless social integration, and a curated library
              of the world's most immersive titles.
            </p>

            <div className="mb-20 flex justify-center transform hover:scale-105 transition-transform duration-300">
              <MainButton text={"START YOUR JOURNEY"} className="text-lg px-10 py-4 shadow-[0_0_30px_rgba(25,229,240,0.3)]" />
            </div>

            <div className="grid grid-cols-2 lg:flex justify-around gap-8 lg:gap-y-0 mt-10 max-w-5xl mx-auto border-t border-white/10 pt-12">
              <TextPart number={"21M+"} text={"Active Users"} />
              <TextPart number={"15K+"} text={"Titles Online"} />
              <TextPart number={"99.9%"} text={"Uptime Sync"} />
              <TextPart number={"0.1MS"} text={"Input Latency"} />
            </div>
          </div>
        </Container>
      </div>

      <div className="bg-[#0a0a0a]">
        <Container>
          <div className="py-20 md:py-32 font-Jakarta">
            <div className="text-center md:text-left mb-16">
              <h2 className="font-extrabold text-3xl md:text-5xl lg:text-[64px] text-white leading-tight">
                ENGINEERED FOR <span className="text-[#00F2FF]">SUPREMACY</span>
              </h2>
              <p className="text-base md:text-xl font-light text-[#B9CACB] max-w-2xl mt-6 leading-relaxed">
                Every feature is designed to reduce the distance between you and the
                digital worlds you love.
              </p>
            </div>
            
            <div className="flex flex-col lg:flex-row justify-between items-center lg:items-stretch gap-8 mt-10">
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
                  "Integrated voice, high-fidelity streaming, and persistent social hubs connect you with millions of players worldwide."
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
      </div>

      <div className="bg-black font-Jakarta">
        <Container className={"py-20 md:py-32"}>
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-20">
            <div className="text-center lg:text-left lg:w-1/2">
              <h2 className="font-extrabold text-3xl md:text-5xl lg:text-[48px] leading-tight mb-8">
                COMMAND THE <span className="text-[#00F2FF]">MAINFRAME</span>
              </h2>
              <p className="text-base md:text-lg text-gray-400 leading-relaxed space-y-4">
                Our native client isn't just a launcher; it's a high-performance
                terminal. Monitor system thermals, optimize frame rates in real-
                time, and manage your neural-link downloads with zero overhead.
              </p>
              <div className="mt-10 flex justify-center lg:justify-start">
                  <button className="border border-[#00F2FF] text-[#00F2FF] px-8 py-3 rounded-xl font-bold hover:bg-[#00F2FF]/10 transition-all">DOWNLOAD CLIENT</button>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center relative">
               <div className="absolute inset-0 bg-[#00F2FF]/10 blur-[100px] rounded-full"></div>
              <Images src={dash} className="w-full max-w-[600px] lg:max-w-full relative z-10 drop-shadow-[0_0_50px_rgba(0,0,0,1)]" />
            </div>
          </div>
        </Container>

        <div
          className="bg-no-repeat bg-cover bg-center font-Jakarta relative overflow-hidden"
          style={{ backgroundImage: `url(${bg2})` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 py-32 md:py-60 px-4 md:px-0">
            <Container>
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-white font-black text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-tight mb-8">
                  JOIN THE <span className="text-[#00F2FF]">REVOLUTION</span>
                </h2>
                <p className="text-base md:text-xl lg:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed italic">
                  "The horizon is waiting. Are you ready to transcend the ordinary?"
                </p>
                <div className="flex justify-center transform hover:scale-105 transition-transform">
                  <MainButton text={"CREATE ACCOUNT"} className="px-12 py-5 text-xl font-black shadow-2xl" />
                </div>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

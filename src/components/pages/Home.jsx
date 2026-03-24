import React from "react";
import bg1 from "../../assets/bg1.png";
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
        <div className="flex text-[50px] text-center font-bold">
          <p>{number}</p>
          {/* <p>+</p> */}
        </div>
        <p className="text-[20px] font-light">{text}</p>
      </div>
    </>
  );
};

const Feature = ({ head, text, link, logo }) => {
  return (
    <>
      <div className="p-6 bg-[#32353C] w-[373px] font-Jakarta">
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
        className="bg-no-repeat bg-cover bg-center py-60 font-Jakarta"
        style={{ backgroundImage: `url(${bg1})` }}
      >
        <Container>
          <div className="text-center">
            <p className="text-[#B9CACB] text-[12px] py-1 w-[250px] rounded-2xl m-auto bg-[#272A31]">
              Servers Online: Global Cluster 01
            </p>
            <h1 className="w-[672px] m-auto font-extrabold text-[96px]">
              ENTER THE <span className="text-[#19e5f0]">HORIZON</span>
            </h1>
            <p className="w-[645px] m-auto text-[20px] mb-10">
              Experience the next evolution of PC gaming. Uncompromising
              performance, limitless social integration, and a curated library
              of the world's most immersive titles.
            </p>

            <MainButton text={"START YOUR JOURNEY"} />

            <div className="flex justify-around mt-10`">
              <TextPart number={"21+"} text={"Active Users"} />
              <TextPart number={"15K"} text={"Titles Online"} />
              <TextPart number={"99.9%"} text={"Uptime Sync"} />
              <TextPart number={"0.1MS"} text={"Input Latency"} />
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="py-20 font-Jakarta">
          <h1 className="font-bold text-[36px]">ENGINEERED FOR SUPREMACY</h1>
          <p className="text-[18px] font-light text-[#B9CACB] w-[540px]">
            Every feature is designed to reduce the distance between you and the
            digital worlds you love.
          </p>
          <div className="flex justify-between mt-10">
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
          <div className="flex items-center justify-between">
            <div className="">
              <h2 className="font-extrabold text-[48px]">
                COMMAND THE <span className="text-[#00F2FF]">MAINFRAME</span>
              </h2>
              <p className="w-[584px] text-[18px]">
                Our native client isn't just a launcher; it's a high-performance
                terminal. Monitor system thermals, optimize frame rates in real-
                time, and manage your neural-link downloads with zero overhead.
              </p>
              <div className="">
                <div className="flex">
                  <div className="">
                    
                  </div>
                  <div className=""></div>
                </div>
              </div>
            </div>
            <div className="">
              <Images src={dash} />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Home;

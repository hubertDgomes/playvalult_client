import React from "react";
import bg1 from "../../assets/bg1.png";
import Container from "../Container";
import MainButton from "../MainButton";

const TextPart = ({number , text}) => {
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

const Home = () => {
  return (
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
            performance, limitless social integration, and a curated library of
            the world's most immersive titles.
          </p>

          <MainButton text={"START YOUR JOURNEY"} />

          <div className="flex justify-around mt-10">
            <TextPart number={"21+"} text={"Active Users"} />
          <TextPart number={"15K"} text={"Titles Online"} />
          <TextPart number={"99.9%"} text={"Uptime Sync"} />
          <TextPart number={"0.1MS"} text={"Input Latency"} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;

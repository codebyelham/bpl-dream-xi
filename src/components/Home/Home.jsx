import React from "react";
import bgImage from "../../assets/bg-shadow.png";
import bgLogo from "../../assets/banner-main.png";

const Home = () => {
  return (
    <section
      className="w-11/12 mx-auto py-15 px-3 bg-black rounded-4xl mt-10"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div>
        <div>
          <img className="mx-auto" src={bgLogo} alt="" />
        </div>
        <div className="text-center mt-4 space-y-4">
          <h1 className="text-[40px] font-bold text-white">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>
          <p className="text-[24px] font-normal text-white">
            Beyond Boundaries Beyond Limits
          </p>
          <button className="py-3 px-5 bg-[#E7FE29] font-bold cursor-pointer mt-4">
            Claim Free Credit
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;

import React from "react";
import navLogo from "../../assets/logo.png";
import coinIcon from '../../assets/Currency.png'

const Navbar = () => {
  return (
    <section className="w-11/12 mx-auto">
      <div className="navbar flex justify-between">
        <div>
          <a href="#">
            <img src={navLogo} alt="" />
          </a>
        </div>
        <div className="flex items-center">
          <ul className="hidden md:flex items-center gap-12 mr-12 text-[#494949]">
            <li className="transition duration-300 hover:text-[#000000]"><a href="">Home</a></li>
            <li className="transition duration-300 hover:text-[#000000]"><a href="">Fixture</a></li>
            <li className="transition duration-300 hover:text-[#000000]"><a href="">Teams</a></li>
            <li className="transition duration-300 hover:text-[#000000]"><a href="">Schedules</a></li>
          </ul>
          <button className="btn"><span>60000000</span> Coin <img src={coinIcon} alt="" /></button>
        </div>
      </div>
    </section>
  );
};

export default Navbar;

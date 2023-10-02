import React, { useState } from "react";
import Logo from "./Logo";
import MenuButton from "./MenuButton";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="absolute w-full  pt-5 pb-5">
        <div className="flex items-center justify-between">
          <div className="pl-5">
            <Logo />
          </div>
          <div
            className="md:hidden pr-5"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <MenuButton />
          </div>
          <div className="hidden md:flex text-white gap-10 text-2xl pr-5">
            <a href="#about"> About</a>
            <a href="#service"> Service</a>
            <a href="#project"> Project </a>
            <a href="#contact"> Contact </a>
          </div>
        </div>

        <div
          className={`grid transition-all ${
            open ? "grid-rows-[1fr] " : "grid-rows-[0fr] "
          }`}
        >
          <div className="overflow-hidden">
            <div className="flex flex-col items-center border-2 bg-white/50 text-black backdrop-blur-[4px] md:hidden   text-2xl p-10 mt-5">
              <a href="#about"> About</a>
              <a href="#service"> Service</a>
              <a href="#project"> Project </a>
              <a href="#contact"> Contact </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

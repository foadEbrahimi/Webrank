import React from "react";
import Button from "./Button";
import Navbar from "./Navbar/Navbar";

export default function Header() {
  return (
    <div className="Header container mx-auto flex items-center md:justify-between ps-1 pe-6  font-Tanha">
      <div className="flex items-center justify-between me-auto md:me-0">
        <div className="flex items-center justify-center cursor-pointer">
          <img src="./Images/Logo.png" alt="" className="w-16" />
          <h1 className="uppercase text-3xl text-white font-bold">kasuka</h1>
        </div>
      </div>
      <Button></Button>
      <Navbar></Navbar>
    </div>
  );
}

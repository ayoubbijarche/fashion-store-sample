import React from "react";
import Image from "next/image";
import logo from "../../../assets/logo.svg";
export const Logo = () => (
  <Image src={logo} alt="lgo" className="w-[30px] mr-4"/>
);


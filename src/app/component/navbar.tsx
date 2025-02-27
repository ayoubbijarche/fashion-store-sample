"use client";
import {
  Navbar,   
  NavbarBrand,   
  NavbarContent,   
  NavbarItem,   
  NavbarMenuToggle,  
  NavbarMenu,  
  NavbarMenuItem
} from "@nextui-org/navbar";
import {Avatar, AvatarGroup, AvatarIcon} from "@nextui-org/avatar";
import Link from "next/link";
import {Button, ButtonGroup} from "@nextui-org/button";
import { Logo } from "./logo";
import { useState } from "react";
import Login from "./login";
import Signup from "./signup";





const Nav = () => {
  
  const [clickedlogin , setlogin] = useState(false);
  const [clickedsignup , setsignup] = useState(false);

  const setloginclicked = () => {
    setlogin(true);
  }
 
  const setsignupclicked = () => {
    setsignup(true);
  }

  const setclickedtrue = () => {
    setlogin(true)
  }
  const setclickedfalse = () => {
    setlogin(false)
  }

  return(
    <Navbar>
      <NavbarBrand>
        <Logo />
        <p className="font-bold text-inherit">Online Store</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link color="foreground" href="#">
            Store
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" aria-current="page">
            <p>About</p>
          </Link>
        </NavbarItem>
  
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Button color="primary" variant="ghost" onClick={setloginclicked} >Login</Button>
        </NavbarItem>

        {clickedlogin? <Login setclickedfalse={setclickedfalse}/> : !clickedlogin}
        {clickedsignup? <Signup/> : !clickedsignup}
        <NavbarItem>
          <Button onClick={setsignupclicked} color="primary" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}

export default Nav;

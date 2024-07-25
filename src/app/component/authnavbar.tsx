"use client";
import {
  Navbar,   
  NavbarBrand,   
  NavbarContent,   
  NavbarItem,   

} from "@nextui-org/navbar";
import {Avatar} from "@nextui-org/avatar";
import Link from "next/link";
import {Button} from "@nextui-org/button";
import { Logo } from "./logo";
import pb from "../lib/pb";


const Navauth = () => {
  
  const Signout = (e: React.FormEvent<HTMLFormElement>) =>{
    try{
      pb.authStore.clear();
      console.log("signed out");
    }catch(e){
      console.log("failed to signout");
    }
  }
  return(
    <Navbar>
      <NavbarBrand>
        <Logo />
        <p className="font-bold text-inherit">Online Store</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
           <Avatar isBordered color="primary" src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
        </NavbarItem>
      </NavbarContent>
        <NavbarItem>
          <Button onClick={Signout} color="primary" href="/" variant="flat">
            Sign out
          </Button>
        </NavbarItem>
    </Navbar>
  )
}

export default Navauth;

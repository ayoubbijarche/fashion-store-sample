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

const Navauth = () => {
  return(
    <Navbar shouldHideOnScroll>
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
    </Navbar>
  )
}

export default Navauth;

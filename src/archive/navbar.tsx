import { Button } from "@heroui/button";
import { Link } from 'react-router-dom';

import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@heroui/navbar";

import { ThemeSwitch } from "./theme-switch";

// Import package.json
//import packageJson from '../../package.json';

const factoryFlowURL = import.meta.env.VITE_APP_URL || "/";


export const Navbar = () => {


  return (
    <HeroUINavbar 
      maxWidth="xl" 
      position="sticky" 
      className="bg-background/70 backdrop-blur-lg z-[+10000] shadow-sm rounded-b-xl"
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-[-3px]",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-secondary",
        ],
      }}
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-2 max-w-fit">
          <Link
            className="flex items-center gap-1"
            color="foreground"
            to="/"
          >
            <span className="text-lg font-semibold tracking-tight">Factory Flow</span>
            <span className="text-sm font-medium tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-[#FF1CF7] to-[#b249f8]">studio</span>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="gap-2">
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className=" sm:flex">
          <Link
          to={factoryFlowURL}>
            <Button
              variant="flat"
            >
              Sign In
            </Button>
          </Link>
            
        </NavbarItem>
      </NavbarContent>

    </HeroUINavbar>
  );
};

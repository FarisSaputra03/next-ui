"use client"
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import {AcmeLogo} from "./AcmeLogo.jsx";
export default function Header() {
  return (
    <div><Navbar>
    <NavbarBrand>
      <AcmeLogo />
      <p className="font-bold text-inherit">ACME</p>
    </NavbarBrand>
    <NavbarContent className=" sm:flex gap-4" justify="center">
      <NavbarItem isActive>
        <Link href="/" aria-current="page">
          Features
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link color="foreground" href="#">
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
      <NavbarItem className=" lg:flex">
        <Link href="#">Login</Link>
      </NavbarItem>
      <NavbarItem>
        <Button as={Link} color="primary" href="#" variant="flat">
          Sign Up
        </Button>
      </NavbarItem>
    </NavbarContent>
  </Navbar></div>
  )
}

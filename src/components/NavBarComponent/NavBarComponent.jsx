import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDolly } from "@fortawesome/free-solid-svg-icons";

import CartWidgetComponent from "../CartWidgetComponent/CartWidgetComponent";
import { useCollectionItems } from "../../hooks/useCollectionItems";

export default function NavBarComponent() {
  const { items } = useCollectionItems("category");

  return (
    <nav>
      <Navbar>
        <NavbarBrand>
          <Link to="/" className="font-bold text-inherit">
            <FontAwesomeIcon icon={faDolly} className="iconStyles" />
            Dolly Store
          </Link>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link to="/" color="foreground">
              <Button variant="" className="hover:bg-gray-300">
                Home
              </Button>
            </Link>
          </NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button variant="" className="hover:bg-gray-300">
                Categories
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Categories">
              {items.map((category) => {
                return (
                  <DropdownItem key={category.slug} aria-label={category.name}>
                    <Link
                      to={`/category/${category.slug}`}
                      aria-label={`Explore ${category.name} products`}
                    >
                      {category.name}
                    </Link>
                  </DropdownItem>
                );
              })}
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
        <CartWidgetComponent />
      </Navbar>
    </nav>
  );
}

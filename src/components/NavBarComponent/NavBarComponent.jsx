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
import { getAllCategories } from "../../services/productServices";

export default function NavBarComponent() {
  const [categories, setCategories] = React.useState([]);

  React.useEffect(() => {
    getAllCategories()
      .then((res) => {
        setCategories(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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
              Home
            </Link>
          </NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button variant="bordered">Categories</Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Categories">
              {categories.map((category) => {
                return (
                  <DropdownItem key={category.slug}>
                    <Link
                      to={`/category/${category.slug}`}
                      textValue={`Explore ${category.name} products`}
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

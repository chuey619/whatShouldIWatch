import React, { useState } from "react";
import {
  Box,
  Heading,
  Flex,
  Text,
  Button,
  ButtonGroup,
  Icon,
} from "@chakra-ui/core";

import { CustomLink as Link } from ".";
import { isEmpty } from "../util";
import { useUserContext } from "../contexts/userContext";
import { useHistory } from "react-router-dom";

const NavbarItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);

const Navbar = (props) => {
  const [{ user }, dispatch] = useUserContext();
  const history = useHistory();
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);

  const handleLogout = (evt) => {
    evt.preventDefault();
    fetch(`/api/auth/logout`, {
      method: "GET",
    }).then((res) => {
      dispatch({
        type: "logout",
      });
      history.push("/login");
    });
  };

  return (
    <Flex
      display="flex"
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="gray.900"
      color="white"
      gridArea="nav"
      {...props}
    >
      <Link to="/">
        <Flex align="center" mr={5}>
          <Icon name="view" mr={2} size={"1.5em"} color="purple.300" />
          <Heading
            as="h1"
            size="lg"
            letterSpacing={"-.1rem"}
            color="purple.300"
          >
            Where To Watch
          </Heading>
        </Flex>
      </Link>
      <Box display={{ base: "block", md: "none" }} onClick={toggleShow}>
        <svg
          fill="white"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Box
        display={{ sm: show ? "block" : "none", md: "flex" }}
        width={{ sm: "full", md: "auto" }}
        alignItems="flex-end"
        flexGrow={1}
        bg="gray.900"
        zIndex={2}
      >
        <Link to="/about">
          <NavbarItems>About</NavbarItems>
        </Link>

        <Link isDisabled={isEmpty(user) ? true : false} to="/profile">
          <NavbarItems>My Profile</NavbarItems>
        </Link>
      </Box>

      <Flex
        display={{ sm: show ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        {isEmpty(user) ? (
          <ButtonGroup spacing={4}>
            {" "}
            <Link to={"/login"}>
              <Button border="1px" variant="outline">
                Login
              </Button>
            </Link>
            <Link to={"/register"}>
              <Button border="1px" variant="solid" variantColor={"purple"}>
                Register
              </Button>
            </Link>
          </ButtonGroup>
        ) : (
          <Button border="1px" variant="outline" onClick={handleLogout}>
            Logout
          </Button>
        )}
      </Flex>
    </Flex>
  );
};

export default Navbar;

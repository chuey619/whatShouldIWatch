import React, { useState } from "react";
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/core";
import { useHistory } from "react-router-dom";

const Login = (props) => {
  const [user, setUser] = useState({ email: "", password: "" });
  const history = useHistory();

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setUser((oldState) => {
      console.log(oldState);
      return {
        ...oldState,
        [name]: value,
      };
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    fetch(`/api/auth/login`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setUser({ email: "", password: "" });
        history.push("/");
      });
  };

  return (
    <>
      <Flex
        width="full"
        align="center"
        justifyContent="center"
        bg="black"
        w="100%"
        h="auto"
        p={4}
        direction="column"
        gridArea="main"
      >
        <Box textAlign="center">
          <Heading color="purple.300">Login</Heading>
        </Box>
        <Box my={4} textAlign="left" w="50%" minW="360px">
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel color="white">Username/Email</FormLabel>
              <Input
                type="text"
                placeholder="enter username/email"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl mt={6}>
              <FormLabel color="white">Password</FormLabel>
              <Input
                name="password"
                value={user.password}
                onChange={handleChange}
                type="password"
                placeholder="enter password"
              />
            </FormControl>
            <Button width="full" mt={4} type="submit" variantColor="purple">
              Sign In
            </Button>
          </form>
        </Box>
      </Flex>
    </>
  );
};

export default Login;

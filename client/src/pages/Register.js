import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/core";

const Register = (props) => {
  const [user, setUser] = useState({ username: "", email: "", password: "" });
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
    fetch(`/api/auth/register`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setUser({ username: "", email: "", password: "" });
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
        gridArea="main"
        direction="column"
      >
        <Box textAlign="center">
          <Heading color="purple.300">Register</Heading>
        </Box>
        <Box my={4} textAlign="left" w="50%" minW="360px">
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel color="white">Email</FormLabel>
              <Input
                onChange={handleChange}
                name="email"
                type="email"
                placeholder="name@email.com"
                value={user.email}
              />
            </FormControl>
            <FormControl mt={6}>
              <FormLabel color="white">Username</FormLabel>
              <Input
                onChange={handleChange}
                name="username"
                type="text"
                placeholder="create username"
                value={user.username}
              />
            </FormControl>
            <FormControl mt={6}>
              <FormLabel color="white">Password</FormLabel>
              <Input
                onChange={handleChange}
                name="password"
                type="password"
                placeholder="create password"
                value={user.password}
              />
            </FormControl>
            <Button width="full" mt={4} type="submit" variantColor="purple">
              Register
            </Button>
          </form>
        </Box>
      </Flex>
    </>
  );
};

export default Register;

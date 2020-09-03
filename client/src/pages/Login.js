import React, { useState } from "react";
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
} from "@chakra-ui/core";
import { useHistory } from "react-router-dom";
import { useUserContext } from "../contexts/userContext";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const history = useHistory();
  const toast = useToast();
  const [, dispatch] = useUserContext();

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((oldState) => {
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
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res?.data?.user) {
          console.log(res?.data?.user);
          dispatch({
            type: "login",
            user: res?.data?.user,
          });
          history.push("/");
        } else if (res?.data?.errors) {
          const errors = res?.data?.errors;
          if (errors) {
            errors.forEach(({ title, description }) => {
              toast({
                title,
                description,
                status: "error",
                duration: 9000,
                isClosable: true,
              });
            });
          }
        }
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
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl mt={6}>
              <FormLabel color="white">Password</FormLabel>
              <Input
                name="password"
                value={formData.password}
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

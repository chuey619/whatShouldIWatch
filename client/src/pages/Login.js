import React from "react";
import { Navbar, Footer } from "../components";
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/core";

function Login() {
  return (
    <>
      <Navbar />
      <Flex
        width="full"
        align="center"
        justifyContent="center"
        bg="black"
        w="100%"
        h="auto"
        p={4}
        direction="column"
      >
        <Box textAlign="center">
          <Heading color="purple.300">Login</Heading>
        </Box>
        <Box my={4} textAlign="left" w="50%" minW="360px">
          <form>
            <FormControl>
              <FormLabel color="white">Username/Email</FormLabel>
              <Input type="email" placeholder="enter username/name@email.com" />
            </FormControl>
            <FormControl mt={6}>
              <FormLabel color="white">Password</FormLabel>
              <Input type="password" placeholder="enter password" />
            </FormControl>
            <Button width="full" mt={4} type="submit" variantColor="purple">
              Sign In
            </Button>
          </form>
        </Box>
      </Flex>
      {/* <Footer /> */}
    </>
  );
}

export default Login;

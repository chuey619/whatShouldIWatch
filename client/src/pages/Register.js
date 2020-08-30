import React from "react";
import { Navbar } from "../components";
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/core";

function Register() {
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
          <Heading color="purple.300">Register</Heading>
        </Box>
        <Box my={4} textAlign="left" w="50%" minW="360px">
          <form>
            <FormControl>
              <FormLabel color="white">Email</FormLabel>
              <Input type="email" placeholder="name@email.com" />
            </FormControl>
            <FormControl mt={6}>
              <FormLabel color="white">Username</FormLabel>
              <Input type="text" placeholder="create username" />
            </FormControl>
            <FormControl mt={6}>
              <FormLabel color="white">Password</FormLabel>
              <Input type="password" placeholder="create password" />
            </FormControl>
            <Button width="full" mt={4} type="submit" variantColor="purple">
              Register
            </Button>
          </form>
        </Box>
      </Flex>
    </>
  );
}

export default Register;

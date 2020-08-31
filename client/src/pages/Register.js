import React from "react";
import { Navbar, Footer } from "../components";
import { Redirect } from "react-router-dom";
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/core";
import axios from "axios";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      redirect: false,
    };
  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/auth/register", {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
      })
      .then(() => {
        this.setState({
          username: "",
          password: "",
          email: "",
          redirect: true,
        });
      });
  };
  render() {
    return (
      <>
        {this.state.redirect && <Redirect to="/home" />}
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
            <form onSubmit={this.onSubmit}>
              <FormControl>
                <FormLabel color="white">Email</FormLabel>
                <Input
                  onChange={this.onChange}
                  name="email"
                  type="email"
                  placeholder="name@email.com"
                  value={this.state.email}
                />
              </FormControl>
              <FormControl mt={6}>
                <FormLabel color="white">Username</FormLabel>
                <Input
                  onChange={this.onChange}
                  name="username"
                  type="text"
                  placeholder="create username"
                  value={this.state.username}
                />
              </FormControl>
              <FormControl mt={6}>
                <FormLabel color="white">Password</FormLabel>
                <Input
                  onChange={this.onChange}
                  name="password"
                  type="password"
                  placeholder="create password"
                  value={this.state.password}
                />
              </FormControl>
              <Button width="full" mt={4} type="submit" variantColor="purple">
                Register
              </Button>
            </form>
          </Box>
        </Flex>
        <Footer />
      </>
    );
  }
}

export default Register;

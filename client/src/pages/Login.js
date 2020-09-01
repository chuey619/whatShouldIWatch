import React from "react";
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/core";
import { Redirect } from "react-router-dom";
import axios from "axios";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
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
      .post("/api/auth/login", {
        username: this.state.username,
        password: this.state.password,
      })
      .then(() => {
        this.setState({
          password: "",
          username: "",
          redirect: true,
        });
      });
  };
  render() {
    return (
      <>
        {this.state.redirect && <Redirect to="/home" />}
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
            <form onSubmit={this.onSubmit}>
              <FormControl>
                <FormLabel color="white">Username/Email</FormLabel>
                <Input
                  type="text"
                  placeholder="enter username"
                  name="username"
                  value={this.state.username}
                  onChange={this.onChange}
                />
              </FormControl>
              <FormControl mt={6}>
                <FormLabel color="white">Password</FormLabel>
                <Input
                  name="password"
                  value={this.state.password}
                  onChange={this.onChange}
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
  }
}

export default Login;

import React from "react";
import { Flex, Grid, Link, Button, Text, Box, Image } from "@chakra-ui/core";
import ResultCard from "../components/ResultCard";

function MyProfile(props) {
  return (
    <>
      <Flex direction="column" overflowY="scroll">
        {new Array(7).fill(0).map(() => {
          return (
            <>
              <Text>Colletion</Text>
              <Box>
                <Box
                  w="100%"
                  h="150px"
                  display="inline-flex"
                  pb={2}
                  overflowX="scroll"
                >
                  {new Array(20).fill(0).map(() => {
                    return (
                      <Image
                        src={"/assets/netflix-active.png"}
                        alt={"test"}
                        borderRadius="md"
                        width="200px"
                      />
                    );
                  })}
                </Box>
              </Box>
            </>
          );
        })}
      </Flex>
    </>
  );
}
export default MyProfile;

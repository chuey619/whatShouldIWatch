import React from "react";
import {
  Flex,
  Grid,
  Link,
  Button,
  Text,
  Box,
  Image,
  PseudoBox,
  useDisclosure,
} from "@chakra-ui/core";
import { CreateCollectionModal } from "../components";

function MyProfile() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <CreateCollectionModal
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      />
      <Flex direction="column" overflowY="scroll" bg="black" p="20px">
        <Link>
          <Button border="1px" variant="outline" color="white">
            Create Collection
          </Button>
        </Link>
        {new Array(7).fill(0).map(() => {
          return (
            <>
              <Text fontSize="20pt" color="white">
                Colletion
              </Text>
              <Box>
                <Box
                  w="100%"
                  h="200px"
                  display="inline-flex"
                  mb={3}
                  overflowX="scroll"
                >
                  {new Array(10).fill(0).map(() => {
                    return (
                      <Image
                        src={"/assets/starisborn.jpeg"}
                        alt={"test"}
                        borderRadius="md"
                        width="100%"
                        onClick={() => console.log("Movie clicked")}
                        mr="10px"
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

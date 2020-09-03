import React from "react";
import {
  Flex,
  Grid,
  FormControl,
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

  const onSubmitCreate = (name) => {
    console.log(name);

    fetch(`/api/collections`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
      }),
    }).then((res) => res.json());

    onClose();
  };
  return (
    <>
      <CreateCollectionModal isOpen={isOpen} onClose={onSubmitCreate} />
      <Flex direction="column" overflowY="scroll" bg="black" p="20px">
        <FormControl>
          <Button border="1px" variant="outline" color="white" onClick={onOpen}>
            Create Collection
          </Button>
        </FormControl>
        {new Array(7).fill(0).map(() => {
          return (
            <>
              <Text fontSize="20pt" color="white">
                Collection
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

import React from "react";
import { Navbar, SubscriptionsModal } from "../components/";
import Search from "../pages/search";
import Footer from "../components/Footer";
import {
  useDisclosure,
  Box,
  Flex,
  Image,
  SimpleGrid,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/core";
import { useParams } from "react-router-dom";
import useQuery from "../hooks/useQuery";

function Home() {
  const shouldAskSubscription = useQuery().has("askSubscription");
  const { isOpen, onOpen, onClose } = useDisclosure(shouldAskSubscription);
  return (
    <>
      <Navbar />
      <SimpleGrid columns={2} spacingX="0" spacingY="20px" bg="black">
        <Box
          bg="black"
          height="80vh"
          width="30vw"
          overflow="scroll"
          minW="222px"
        >
          <Image
            borderRadius="100px"
            boxShadow="1px 3px 32px #4a3853"
            src="/assets/netflix-circle.png"
            width="180px"
            height="180px"
            mt="20px"
            ml="20px"
          ></Image>
          <Image
            borderRadius="100px"
            boxShadow="1px 3px 32px #4a3853"
            src="/assets/hulu-circle.jpg"
            width="180px"
            height="180px"
            mt="20px"
            ml="20px"
          ></Image>
          <Image
            borderRadius="100px"
            boxShadow="1px 3px 32px #4a3853"
            src="/assets/disneyplus-circle.jpg"
            width="180px"
            height="180px"
            mt="20px"
            mb="20px"
            ml="20px"
          ></Image>
        </Box>
        <Box
          bg="black"
          height="80vh"
          width="70vw"
          display="flex"
          flexDirection="column"
          alignItems="left"
          pl="20px"
          pr="30px"
          pt="30vh"
        >
          <Heading color="white">Browse movies and shows in one click.</Heading>
          <p>Search from six services and save your favorites for later!</p>
        </Box>
        <Search />
      </SimpleGrid>
      <SubscriptionsModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      <Footer />
    </>
  );
}

export default Home;
{
  /* <form>
<FormControl>
  <Input
    type="search"
    width="30vw"
    placeholder="What would you like to watch?"
    mt="20px"
  />
</FormControl>
<Button width="20vw" mt={4} type="submit" variantColor="purple">
  Search
</Button>
</form> */
}

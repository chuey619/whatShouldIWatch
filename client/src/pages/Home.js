import React from "react";
import { Navbar, SubscriptionsModal } from "../components/";
import Footer from "../components/Footer";
import { useDisclosure } from "@chakra-ui/core";
import { useParams } from "react-router-dom";
import useQuery from "../hooks/useQuery";

function Home() {
  const shouldAskSubscription = useQuery().has("askSubscription");
  const { isOpen, onOpen, onClose } = useDisclosure(shouldAskSubscription);
  return (
    <>
      <Navbar />
      <div>Home</div>
      <SubscriptionsModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      <Footer />
    </>
  );
}

export default Home;

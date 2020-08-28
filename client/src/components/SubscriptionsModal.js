import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
  Text,
  FormControl,
  SimpleGrid,
  Image,
} from "@chakra-ui/core";

const DEFAULT_STATE = {
  netflix: false,
  hulu: false,
  hbomax: false,
  primevideo: false,
  disneyplus: false,
  appletv: false,
};

const ToggleableImage = ({
  subscriptionName,
  toggleSubscription,
  isToggled,
}) => {
  const imageURL = `/assets/${subscriptionName}-${
    isToggled ? "active" : "inactive"
  }.png`;
  console.log(imageURL);
  return (
    <Image
      src={imageURL}
      alt={subscriptionName}
      onClick={() => {
        toggleSubscription(subscriptionName);
      }}
      borderRadius="md"
      boxShadow={isToggled ? "1px 3px 16px #d6de94" : ""}
    />
  );
};

const SubscriptionsModal = ({ isOpen, onOpen, onClose }) => {
  const [subscriptions, setSubscriptions] = useState(DEFAULT_STATE);

  const toggleSubscription = (subscriptionName) => {
    setSubscriptions((prevState) => {
      return {
        ...prevState,
        [subscriptionName]: !prevState[subscriptionName],
      };
    });
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        closeOnOverlayClick={false}
        size="xl"
      >
        <ModalOverlay bg="rgb(0 0 0 / 80%)" />
        <ModalContent
          bgImage="url('/assets/bokeh2.png')"
          bgPos="center"
          color="gray.200"
        >
          <ModalHeader>Add Your Subscriptions</ModalHeader>
          <ModalBody>
            <Text mb={4}>Click your subscriptions</Text>
            <FormControl>
              <SimpleGrid minChildWidth="120px" spacing="20px">
                {Object.entries(subscriptions).map(([name, isToggled]) => {
                  return (
                    <ToggleableImage
                      key={name}
                      subscriptionName={name}
                      toggleSubscription={toggleSubscription}
                      isToggled={isToggled}
                    />
                  );
                })}
              </SimpleGrid>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button variantColor="purple" mr={3} onClick={onClose}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SubscriptionsModal;

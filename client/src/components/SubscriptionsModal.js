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
  netflix: {
    active: false,
    color: "#d13535",
  },
  hulu: {
    active: false,
    color: "#f3fdf7",
  },
  hbomax: {
    active: false,
    color: "#36354b",
  },
  primevideo: {
    active: false,
    color: "#14222e",
  },
  disneyplus: {
    active: false,
    color: "#6a5ca9",
  },
  appletv: {
    active: false,
    color: "#f3f3f3",
  },
};

const ToggleableImage = ({
  subscriptionName,
  toggleSubscription,
  active,
  color,
  subscriptions,
  addSubscriptions,
}) => {
  const imageURL = `/assets/${subscriptionName.toLowerCase()}-${
    active ? "active" : "inactive"
  }.png`;
  return (
    <Image
      src={imageURL}
      alt={subscriptionName}
      onClick={() => {
        toggleSubscription(subscriptionName);
      }}
      borderRadius="md"
      boxShadow={active ? `1px 3px 16px ${color}` : ""}
    />
  );
};

const SubscriptionsModal = ({
  formSubscriptions,
  addSubscriptions,
  isOpen,
  onOpen,
  onClose,
  activeSubscriptions,
}) => {
  const [subscriptions, setSubscriptions] = useState(formSubscriptions);

  const toggleSubscription = (subscriptionName) => {
    addSubscriptions((prevState) => {
      return {
        ...prevState,
        [subscriptionName]: {
          ...prevState[subscriptionName],
          active: !prevState[subscriptionName].active,
        },
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
          bg="gray.900"
          bgPos="center"
          color="gray.200"
          borderRadius="lg"
          boxShadow="1px 3px 32px #4a3853"
        >
          <ModalHeader>Add Your Subscriptions</ModalHeader>
          <ModalBody>
            <Text mb={4}>Click your subscriptions</Text>
            <FormControl>
              <SimpleGrid minChildWidth="120px" spacing="20px">
                {Object.entries(formSubscriptions).map(
                  ([name, { color, active }]) => {
                    return (
                      <ToggleableImage
                        subscriptions={subscriptions}
                        addSubscriptions={addSubscriptions}
                        key={name}
                        subscriptionName={name}
                        toggleSubscription={toggleSubscription}
                        active={active}
                        color={color}
                      />
                    );
                  }
                )}
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

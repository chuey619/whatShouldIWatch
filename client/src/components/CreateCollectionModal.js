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
  FormLabel,
  Input,
} from "@chakra-ui/core";

function CreateCollectionModal({ isOpen, onOpen, onClose }) {
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
            <Text mb={4}>Create A New Collection</Text>
            <FormControl>
              <FormLabel htmlFor="email">Collection Name</FormLabel>
              <Input
                type="collection-name"
                id="collection-name"
                placeholder="e.g.: My Favorite Movies"
              />
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
}

export default CreateCollectionModal;

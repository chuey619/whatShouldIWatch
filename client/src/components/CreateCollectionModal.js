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

function CreateCollectionModal({ isOpen, onClose }) {
  const [collectionName, setCollectionName] = useState();

  return (
    <>
      <Modal isOpen={isOpen} closeOnOverlayClick={false} size="xl">
        <ModalOverlay bg="rgb(0 0 0 / 80%)" />
        <ModalContent
          bg="gray.900"
          bgPos="center"
          color="gray.200"
          borderRadius="lg"
          boxShadow="1px 3px 32px #4a3853"
        >
          <ModalHeader>Create Collection</ModalHeader>
          <ModalBody>
            <Text mb={4}>Enter collection name below and save</Text>
            <FormControl>
              <Input
                type="collection-name"
                id="collection-name"
                placeholder="e.g. My Favorite Movies"
                color="black"
                onChange={(evt) => setCollectionName(evt.target.value)}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              variantColor="purple"
              mr={3}
              onClick={() => {
                onClose(collectionName);
              }}
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CreateCollectionModal;

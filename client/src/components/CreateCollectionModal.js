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

function CreateCollectionModal({
  isOpen,
  onClose,
  onOpen,
  shouldFetch,
  setShouldFetch,
}) {
  const [collectionName, setCollectionName] = useState({ name: "" });
  const handleChange = (evt) => {
    setCollectionName({
      name: evt.target.value,
    });
  };
  const handleSubmit = async (evt) => {
    await onClose(collectionName);
    evt.preventDefault();
    await fetch("/api/collections", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(collectionName),
    });
    setShouldFetch(!shouldFetch);
  };
  return (
    <>
      <Modal isOpen={isOpen} closeOnOverlayClick={true} size="xl">
        <form onSubmit={handleSubmit}>
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
                  type="text"
                  id="collection-name"
                  placeholder="e.g. My Favorite Movies"
                  color="black"
                  onChange={handleChange}
                  value={collectionName.name}
                  name="name"
                />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button
                type="submit"
                variantColor="purple"
                mr={3}
                onClick={() => {}}
              >
                Save
              </Button>
              <Button variantColor="purple" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
}

export default CreateCollectionModal;

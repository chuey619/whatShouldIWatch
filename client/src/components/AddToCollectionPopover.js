import React, { useState, useEffect } from "react";
import {
  Button,
  PopoverTrigger,
  PopoverContent,
  Popover,
  PopoverHeader,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  PopoverFooter,
  Box,
  ButtonGroup,
  useDisclosure,
} from "@chakra-ui/core";

function AddToCollectionPopover(props) {
  const initialFocusRef = React.useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [userCollections, setUserCollections] = useState([]);
  useEffect(() => {
    if (props.user) {
      fetch("/api/collections")
        .then((res) => res.json())
        .then((json) => setUserCollections(json.data && json.data.collections));
    }
  }, []);

  const { currentCollections } = props;
  const collectionNames = (currentCollections || []).map((c) => c.name);

  console.log(currentCollections);
  return (
    <Popover
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      initialFocusRef={initialFocusRef}
      placement="bottom"
      closeOnBlur={false}
    >
      <PopoverTrigger>
        <Button variant="outline" color="white" position="relative" mt="8px">
          +
        </Button>
      </PopoverTrigger>
      <PopoverContent
        zIndex={4}
        color="white"
        bg="purple.800"
        borderColor="purple.800"
      >
        <PopoverHeader pt={4} fontWeight="bold" border="0">
          Save To Your Collections
        </PopoverHeader>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
          {userCollections &&
            userCollections.map((collection) => {
              if (collectionNames.includes(collection.name)) {
                return null;
              }
              return (
                <Button
                  mr="10px"
                  variant="outline"
                  bg="purple.400"
                  onClick={() => {
                    fetch(`/api/collections/${collection.name}/${props.id}`, {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({ hello: "World" }),
                    });
                    window.location.reload();
                  }}
                >
                  {collection.name}
                </Button>
              );
            })}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default AddToCollectionPopover;

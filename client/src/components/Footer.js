import React, { useState } from "react";
import { Box, Icon, Stack, Text } from "@chakra-ui/core";

function Footer() {
  return (
    <Box bg="green.100" px={6} pt={5} alignSelf="flex-end">
      <Stack spacing={[8, 12]} mx="auto" maxW="720px" align="center">
        <Box rounded="full" p={5} bg="white" mt={-10} textAlign="center">
          <Icon name="view" size="4em" />
        </Box>
        <Text fontSize="xl" fontWeight="medium">
          {"Website made with love by Charlotte, Chuey & Joleen"}
        </Text>
      </Stack>
    </Box>
  );
}

export default Footer;

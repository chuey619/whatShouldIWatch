import React from "react";
import { Box, Icon, Stack, Text } from "@chakra-ui/core";

function Footer() {
  return (
    <Box backgroundColor="gray.900" color="gray.400" gridArea="footer">
      <Stack spacing={[8, 12]} mx="auto" maxW="720px" align="center">
        <Box rounded="full" p={5} bg="white" mt={-10} textAlign="center">
          <Icon name="view" size="4em" />
        </Box>
        <Text fontSize="xl" fontWeight="medium">
          {"Website made with 🤍 by Charlotte, Chuey & Joleen"}
        </Text>
      </Stack>
    </Box>
  );
}

export default Footer;

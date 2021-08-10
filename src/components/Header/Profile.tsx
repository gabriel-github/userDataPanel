import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Gabriel</Text>
          <Text color="gray.300" fontSize="small">
            gabrielferrsantos201@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Gabriel Santos"
        src="https://github.com/gabriel-github.png"
      />
    </Flex>
  );
}

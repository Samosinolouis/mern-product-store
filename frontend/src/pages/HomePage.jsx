import { Box, Container, Heading, Text } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Container maxW="container.lg" py={8}>
      <Box textAlign="center" py={10}>
        <Heading as="h1" size="2xl" mb={6}>
          Welcome to Product Store
        </Heading>
        <Text fontSize="xl">
          Browse our products or add a new one using the + button in the navbar.
        </Text>
      </Box>
    </Container>
  );
};

export default HomePage;

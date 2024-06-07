import { Container, Text, VStack, Box, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.lg" p={4}>
      <Box as="nav" bg="blue.500" color="white" p={4} mb={6} borderRadius="md">
        <Heading size="md">Hello World App</Heading>
        <Link to="/events" style={{ marginLeft: "20px", color: "white", textDecoration: "underline" }}>Events</Link> {/* Add link to Events page */}
      </Box>
      <VStack spacing={4} align="center" justify="center" height="70vh">
        <Text fontSize="4xl" fontWeight="bold">
          Hello World
        </Text>
        <Text fontSize="lg">Welcome to your first React app with Chakra UI!</Text>
      </VStack>
    </Container>
  );
};

export default Index;
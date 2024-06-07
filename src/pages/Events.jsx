import { Container, Text, VStack, Box, Heading, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useEvents } from "../integrations/supabase/index.js";

const Events = () => {
  const { data: events, error, isLoading } = useEvents();

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error loading events</Text>;

  return (
    <Container maxW="container.lg" p={4}>
      <Box as="nav" bg="blue.500" color="white" p={4} mb={6} borderRadius="md">
        <Heading size="md">Events App</Heading>
      </Box>
      <VStack spacing={4} align="center" justify="center" height="70vh">
        <Heading size="lg" mb={4}>Events</Heading>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Event Name</Th>
              <Th>Date</Th>
              <Th>Venue</Th>
              <Th>Starred</Th>
              <Th>Private</Th>
            </Tr>
          </Thead>
          <Tbody>
            {events.map(event => (
              <Tr key={event.id}>
                <Td>{event.name}</Td>
                <Td>{event.date}</Td>
                <Td>{event.venue_id}</Td>
                <Td>{event.is_starred ? "Yes" : "No"}</Td>
                <Td>{event.private ? "Yes" : "No"}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </VStack>
    </Container>
  );
};

export default Events;
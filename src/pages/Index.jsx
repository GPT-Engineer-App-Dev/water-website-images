import { Container, VStack, Heading, Text, Image, Box } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to Water World
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Discover the beauty and importance of water in our lives.
        </Text>
        <Box boxSize="md">
          <Image src="/images/waterfall.jpg" alt="Waterfall" borderRadius="md" />
        </Box>
        <Text fontSize="md" textAlign="center">
          Water is essential for all living beings. It covers 71% of the Earth's surface and is vital for all known forms of life.
        </Text>
        <Box boxSize="md">
          <Image src="/images/ocean.jpg" alt="Ocean" borderRadius="md" />
        </Box>
        <Text fontSize="md" textAlign="center">
          Oceans hold about 96.5% of all Earth's water. They are home to a diverse range of marine life and play a crucial role in regulating the climate.
        </Text>
      </VStack>
    </Container>
  );
};

export default Index;
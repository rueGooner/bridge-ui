import { Box, Flex, Heading, Image, Button, Spacer } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Home() {
  return (
    <Flex direction={{ base: "column" }}>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        px={{ base: 4, md: 10 }}
        py={4}
        bg="transparent"
        position="relative"
        zIndex={10}
      >
        {/* Logo */}
        <Heading size="md" color="brand.500">
          Bridge
        </Heading>

        <Spacer />

        {/* Auth buttons */}
        <Flex gap={3}>
          <Link href="/login" passHref>
            <Button variant="ghost" colorScheme="brand">
              Login
            </Button>
          </Link>
          <Link type="button" href="/register" passHref>
            <Button as="a" colorScheme="brand">
              Register
            </Button>
          </Link>
        </Flex>
      </Flex>
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        minH="100vh"
        px={{ base: 6, md: 16 }}
        py={{ base: 10, md: 0 }}
        gap={8}
        bg="gray.100"
      >
        {/* Image side */}
        <Box flex="1" display="flex" justifyContent="center">
          <Image
            src="/home-image.png"
            alt="App preview"
            borderRadius="3xl"
            boxSize={{ base: "250px", md: "400px" }}
            objectFit="cover"
            shadow="2xl"
          />
        </Box>

        {/* Text side */}
        <Box
          flex="1"
          color="brand.500"
          textAlign={{ base: "center", md: "left" }}
        >
          <Heading as="h1" size="2xl" mb={4}>
            Because it takes a village!
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Build smarter, faster, and more reliably. Our platform makes your
            infrastructure simple and scalable.
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
}

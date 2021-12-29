import React from 'react'
import { Flex, Heading, HStack, Text, Box } from "@chakra-ui/react"
import { BsFillMoonFill } from 'react-icons/bs';

export default function Header() {
  return (
    <Box as="header" py="6" px="4" boxShadow="md" bg="white">
      <Flex justifyContent="space-between" alignItems="center" px={{ md: "12" }} maxW="80rem" m="auto">
        <Heading size="md">Where in the world?</Heading>

        <HStack space="8">
          <BsFillMoonFill />
          <Text>Dark Mode</Text>
        </HStack>
      </Flex>
    </Box>
  )
}

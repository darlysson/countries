import React from 'react'
import { Flex, Heading, HStack, Text, Box, Button } from "@chakra-ui/react"
import { BsMoon } from 'react-icons/bs';

export default function Header() {
  return (
    <Box as="header" py="6" px="4" boxShadow="md" bg="white">
      <Flex justifyContent="space-between" alignItems="center" px={{ md: "12" }} maxW="80rem" m="auto">
        <Heading size="md">Where in the world?</Heading>

        <Button leftIcon={<BsMoon />} variant="ghost">
          Dark Mode
        </Button>
      </Flex>
    </Box>
  )
}

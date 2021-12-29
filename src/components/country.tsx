import React from 'react'
import { Image, VStack, Box, Heading, UnorderedList, ListItem, Text } from '@chakra-ui/react'

export default function Country() {
  return (
    <VStack boxShadow="base" borderBottomLeftRadius="6" borderBottomRightRadius="6">
      <Box>
        <Image borderTopLeftRadius="6" borderTopRightRadius="6" src="" alt="USA flag" />
      </Box>
      <Box px="4" py="6" w="full" bg="white" borderBottomLeftRadius="6" borderBottomRightRadius="6" style={{ marginTop: 0 }}>
        <Heading mb="5" fontWeight="bold" fontSize="16">United States of America</Heading>
        <UnorderedList styleType="none" spacing="none" style={{ marginInlineStart: 0 }}>
          <ListItem >
            <Text display="flex" fontSize="14" fontWeight="500">Population: <Text fontWeight="400" as="span" ml="1">323.947.000</Text></Text>
          </ListItem>
          <ListItem mt="1.5">
            <Text display="flex" fontSize="14" fontWeight="500">Region: <Text fontWeight="400" as="span" ml="1">Americas</Text></Text>
          </ListItem>
          <ListItem mt="1.5">
            <Text display="flex" fontSize="14" fontWeight="500">Capital: <Text fontWeight="400" as="span" ml="1">Washington D.C</Text></Text>
          </ListItem>
        </UnorderedList>
      </Box>
    </VStack>
  )
}
